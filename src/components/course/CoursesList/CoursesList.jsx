import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import s from './CoursesList.module.css'
import NavButton from '../../UI/navButton/NavButton'
import Modal from '../../UI/modal/Modal'
import ChooseDayWorkModal from '../../modals/ChooseDayWorkModal/ChooseDayWorkModal'
import { useState, useEffect } from 'react'
import { setWorkOutType } from '../../../store/slices/courses'

function CoursesList({ courses, isMainPage, profile = false }) {
    const [modalActive, setModalActive] = useState(false)
    const [workOuts, setWorkOuts] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isDone, setIsDone] = useState([])
    const isVideoWatched = JSON.parse(localStorage?.getItem('isVideoWatched'))

    const { allCourses, workOutType } = useSelector((state) => state.courses)
    const { userID } = useSelector((state) => state.auth)

    const handleClick = (exercise) => {
        const chosenWorkOut = courses.filter((el) => el._id === exercise._id)[0]
            .workouts
        const workOutType = { nameEN: exercise.nameEN, nameRU: exercise.nameRU }

        dispatch(setWorkOutType(workOutType))
        localStorage.setItem('workOutType', JSON.stringify(workOutType))
        setModalActive(true)
        setWorkOuts(chosenWorkOut)
    }

    const setDoneWorkouts = () => {
        if (workOutType.nameEN) {
            const allProgress = allCourses
                ?.find((item) => item.nameEN === workOutType.nameEN)
                .workouts.map((workout) => {
                    let isAllExercisesValid

                    if (workout.exercises) {
                        isAllExercisesValid = workout.exercises.every(
                            (exercise) => {
                                const userExercise = exercise.users?.find(
                                    (user) => user.userID === userID,
                                )
                                if (!userExercise) {
                                    return false
                                }
                                return (
                                    userExercise?.quantityUser ===
                                    exercise?.quantity
                                )
                            },
                        )
                    } else {
                        isAllExercisesValid = isVideoWatched?.includes(workout.video)
                            ? true
                            : false
                    }

                    return isAllExercisesValid
                })

            setIsDone(allProgress)
        }
    }

    useEffect(() => {
        setDoneWorkouts()
    }, [workOutType.nameEN, allCourses])

    return (
        <div className={s.courses}>
            {courses &&
                courses.map((el) => (
                    <div
                        className={s.course}
                        key={Math.random()}
                        onClick={() =>
                            !profile && navigate(`/course/${el._id}`)
                        }
                    >
                        <span className={s.courseName}>{el.nameRU}</span>
                        <img
                            className={s.courseImg}
                            src={`../img/courses/${el.nameEN}.svg`}
                            alt={el.nameRU}
                        />
                        {!isMainPage && (
                            <div className={s.btnWrapper}>
                                <NavButton
                                    onClick={() => {
                                        handleClick(el)
                                    }}
                                >
                                    Перейти →
                                </NavButton>
                            </div>
                        )}
                    </div>
                ))}
            <Modal active={modalActive} setActive={setModalActive}>
                <ChooseDayWorkModal workOuts={workOuts} isDone={isDone} />
            </Modal>
        </div>
    )
}

export default CoursesList
