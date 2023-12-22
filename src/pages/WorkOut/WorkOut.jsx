import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import s from './WorkOut.module.css'
import Modal from '../../components/UI/modal/Modal'
import ProgressModalItem from '../../components/workOut/ProgressItem/ProgressItem'
import Button from '../../components/UI/button/Button'
import SvgSuccess from '../../components/UI/svgSuccess/SvgSuccess'
import WorkOutExercise from '../../components/workOut/Exercise/WorkOutExercise'
import sProgress from '../../components/workOut/ProgressItem/ProgressItem.module.css'
import { setWorkOut, setWorkOutType } from '../../store/slices/courses'
import firebase from '../../firebase'
import { toast } from 'react-toastify'
import { useGetCoursesQuery } from '../../services/courses'

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        https: '//www.youtube.com/watch',
        autoplay: 1,
    },
}

const WorkOut = () => {
    const { refetch } = useGetCoursesQuery()
    const { workOut, workOutType, allCourses } = useSelector(
        (state) => state.courses,
    )
    const { userID } = useSelector((state) => state.auth)
    const [modalActive, setModalActive] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()

    const userQuantityExercises = workOut?.exercises?.map((exercise) => {
        const user = exercise.users?.find((user) => user.userID === userID)
        return user ? user.quantityUser : 0
    })

    const allProgress = workOut?.exercises?.map((el) => el.quantity)
    const [userProgress, setUserProgress] = useState(
        allProgress?.map((el) => 0) ?? [],
    )

    const result = userQuantityExercises?.map((el, index) =>
        Math.round((el * 100) / allProgress[index]),
    )

    const course = allCourses.find(
        (item) => item.nameEN === workOutType?.nameEN,
    )?.workouts

    const indexWorkout = course?.findIndex(
        (workout) => workout.name === workOut?.name,
    )

    useEffect(() => {
        if (!workOut.name) {
            const chosenWorkOut = JSON.parse(localStorage.getItem('workOut'))
            const chosenWorkOutType = JSON.parse(
                localStorage.getItem('workOutType'),
            )

            dispatch(setWorkOut(chosenWorkOut))
            dispatch(setWorkOutType(chosenWorkOutType))
        }
    }, [])

    useEffect(() => {
        if (userQuantityExercises) {
            console.log('userQuantityExercises', userQuantityExercises)
        }
    }, [userQuantityExercises])

    const sendValuesProgressUser = () => {
        userProgress.forEach((value, index) => {
            const courseRef = firebase
                .database()
                .ref(
                    `courses/${workOutType?.nameEN.toLowerCase()}/workouts/${indexWorkout}/exercises/${index}`,
                )

            courseRef.once('value', (snapshot) => {
                const courseFirebase = snapshot.val()

                if (
                    courseFirebase?.users &&
                    Array.isArray(courseFirebase?.users)
                ) {
                    const userIndex = courseFirebase?.users.findIndex(
                        (user) => user.userID === userID,
                    )

                    if (userIndex !== -1) {
                        courseFirebase.users[userIndex] = {
                            userID: userID,
                            quantityUser: Number(value),
                        }
                    } else {
                        courseFirebase.users.push({
                            userID: userID,
                            quantityUser: Number(value),
                        })
                    }
                } else {
                    courseFirebase.users = [
                        {
                            userID: userID,
                            quantityUser: Number(value),
                        },
                    ]
                }

                courseRef
                    .update(courseFirebase)
                    .then(() => {
                        setIsSubmit(true), setModalActive(false)
                        refetch()
                    })
                    .catch((error) => {
                        toast(error, {
                            className: s.error,
                        })
                    })
            })
        })
    }

    const isVideoWatched = JSON.parse(localStorage?.getItem('isVideoWatched'))

    return (
        <div>
            <h1 className={s.title}>{workOutType.nameRU}</h1>
            <div className={s.breadCrumbs}>
                {workOut?.name} / {workOut?.day}
            </div>
            <div>
                <YouTube
                    videoId={workOut?.video}
                    opts={opts}
                    className={s.video}
                    onEnd={() => {
                        if (isVideoWatched) {
                            localStorage.setItem(
                                'isVideoWatched',
                                JSON.stringify([
                                    ...isVideoWatched,
                                    indexWorkout,
                                ]),
                            )
                        } else {
                            localStorage.setItem(
                                'isVideoWatched',
                                JSON.stringify([indexWorkout]),
                            )
                        }
                    }}
                />
            </div>
            {workOut?.exercises?.length ? (
                <WorkOutExercise
                    workOut={workOut}
                    result={result}
                    setModalActive={setModalActive}
                />
            ) : (
                <div className={s.notExercise}>
                    Для данной тренировки упражений нет
                </div>
            )}
            <Modal
                active={isSubmit ? isSubmit : modalActive}
                setActive={isSubmit ? setIsSubmit : setModalActive}
            >
                {!isSubmit && (
                    <div className={sProgress.progressBlock}>
                        <h4 className={sProgress.myProgress}>Мой прогресс</h4>
                        <form action="#" className={sProgress.form}>
                            {workOut?.exercises?.map((el, id) => (
                                <ProgressModalItem
                                    key={Math.random()}
                                    el={el}
                                    id={id}
                                    userProgress={userProgress}
                                    setUserProgress={setUserProgress}
                                />
                            ))}
                        </form>

                        <Button
                            color={'purple'}
                            onClick={() => {
                                sendValuesProgressUser()
                            }}
                        >
                            Отправить
                        </Button>
                    </div>
                )}

                {isSubmit && <SvgSuccess text="Ваш прогресс засчитан!" />}
            </Modal>
        </div>
    )
}

export default WorkOut
