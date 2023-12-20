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

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        https: '//www.youtube.com/watch',
        autoplay: 1,
    },
}

const WorkOut = () => {
    const { workOut } = useSelector((state) => state.courses)
    const { workOutType } = useSelector((state) => state.courses)
    const [modalActive, setModalActive] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()

    const allProgress = workOut?.exercises?.map((el) => el.quantity)
    const [userProgress, setUserProgress] = useState(
        allProgress?.map((el) => ''),
    )
    const result = userProgress?.map(
        (el, index) => (el * 100) / allProgress[index],
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
                                    key={el.id}
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
                                setIsSubmit(true), setModalActive(false)
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
