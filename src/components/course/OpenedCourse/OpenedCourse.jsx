import YouTube from 'react-youtube'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../../UI/button/Button'
import s from './OpenedCourse.module.css'
import sProgress from './ProgressItem.module.css'
import { useState, useEffect } from 'react'
import Modal from '../../UI/modal/Modal'
import ProgressModalItem from './ProgressItem'
import SvgSuccess from '../../UI/svgSuccess/SvgSuccess'
import { useSelector } from 'react-redux'
import { progress } from '../../../mock/progressBar'

const exercises = [
    {
        id: 1,
        text: 'Наклон вперед',
        repetition: '(10 повторений)',
        quantity: 10,
        quantityUser: 0,
    },
    {
        id: 2,
        text: 'Наклон назад',
        repetition: '(10 повторений)',
        quantity: 10,
        quantityUser: 0,
    },
    {
        id: 3,
        text: 'Поднятие ног, согнутых в коленях',
        repetition: '(5 повторений)',
        quantity: 5,
        quantityUser: 0,
    },
]

const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
        https: '//www.youtube.com/watch',
        autoplay: 1,
    },
}

const OpenedCourse = () => {
    const allProgress = [10, 10, 20] // здесь должен был быть стейт
    const userProgress = [3, 8, 9]

    const result = userProgress.map(
        (el, index) => (el * 100) / allProgress[index],
    )

    const { workOut } = useSelector((state) => state.courses)
    console.log(workOut)

    const [modalActive, setModalActive] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        // console.log('modalProgressActive', modalActive)
    }, [modalActive])

    useEffect(() => {
        // console.log('exercises', exercises)
    }, [exercises])

    return (
        <div>
            <h1 className={s.title}>Йога</h1>
            <nav className={s.breadCrumbs}>
                Красота и здоровье / {workOut.day}
            </nav>
            <div>
                <YouTube
                    videoId={workOut.video}
                    opts={opts}
                    className={s.video}
                />
            </div>
            <div className={s.work}>
                <div className={s.exercises}>
                    <h2>Упражнения</h2>
                    <ol className={s.ul}>
                        {workOut.exercises.map((el) => (
                            <li key={el.name}>{el.name}</li>
                        ))}
                    </ol>
                    <Button
                        color={'purple'}
                        onClick={() => setModalActive(true)}
                    >
                        Заполнить свой прогресс
                    </Button>

                    <Modal
                        active={isSubmit ? isSubmit : modalActive}
                        setActive={isSubmit ? setIsSubmit : setModalActive}
                    >
                        {!isSubmit && (
                            <div className={sProgress.progressBlock}>
                                <h4 className={sProgress.myProgress}>
                                    Мой прогресс
                                </h4>
                                <form action="#" className={sProgress.form}>
                                    {exercises.map((el) => (
                                        <ProgressModalItem
                                            key={el.id}
                                            el={el}
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

                        {isSubmit && (
                            <SvgSuccess text="Ваш прогресс засчитан!" />
                        )}
                    </Modal>
                </div>
                <div className={s.result}>
                    <h2>Мой прогресс по тренировке 2:</h2>
                    {workOut.exercises.map((el, index) => (
                        <div key={el.name} className={s.exercise}>
                            <h3>{el.name.split('(')[0]}</h3>
                            <ProgressBar
                                {...progress[index]}
                                completed={result[index]}
                                className={s.progress}
                                labelClassName={s.barLabel}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OpenedCourse
