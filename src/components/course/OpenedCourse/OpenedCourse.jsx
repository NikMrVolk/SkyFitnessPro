import YouTube from 'react-youtube'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../../UI/button/Button'
import s from './OpenedCourse.module.css'
import sProgress from './ProgressItem.module.css'
import { useState, useEffect } from 'react'
import Modal from '../../UI/modal/Modal'
import ProgressModalItem from './ProgressItem'

const exercises = [
    {
        id: 1,
        text: 'Наклон вперед',
        repetition: '(10 повторений)',
        quantityUser: 0,
    },
    {
        id: 2,
        text: 'Наклон назад',
        repetition: '(10 повторений)',
        quantityUser: 0,
    },
    {
        id: 3,
        text: 'Поднятие ног, согнутых в коленях',
        repetition: '(5 повторений)',
        quantityUser: 0,
    },
]

const OpenedCourse = () => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            https: '//www.youtube.com/watch',
            autoplay: 1,
        },
    }

    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        console.log('modalProgressActive', modalActive)
    }, [modalActive])

    useEffect(() => {
        console.log('exercises', exercises)
    }, [exercises])

    return (
        <div>
            <h1 className={s.title}>Йога</h1>
            <nav className={s.breadCrumbs}>
                Красота и здоровье / Йога на каждый день / 2 день
            </nav>
            <div>
                <YouTube
                    videoId="oqe98Dxivns"
                    opts={opts}
                    className={s.video}
                />
            </div>
            <div className={s.work}>
                <div className={s.exercises}>
                    <h2>Упражнения</h2>
                    <ol className={s.ul}>
                        {exercises.map((el) => (
                            <li key={el.id}>
                                {el.text} {el.repetition}
                            </li>
                        ))}
                    </ol>
                    <Button
                        text={'Заполнить свой прогресс'}
                        color={'purple'}
                        onClick={() => setModalActive(true)}
                    />

                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className={sProgress.progressBlock}>
                            <h4 className={sProgress.myProgress}>
                                Мой прогресс
                            </h4>
                            <form action="#" className={sProgress.form}>
                                {exercises.map((el) => (
                                    <ProgressModalItem key={el.id} el={el} />
                                ))}
                            </form>

                            <Button text={'Отправить'} color={'purple'} />
                        </div>
                    </Modal>
                </div>
                <div className={s.result}>
                    <h2>Мой прогресс по тренировке 2:</h2>
                    {exercises.map((el) => (
                        <div key={el.id} className={s.exercise}>
                            <h3>{el.text}</h3>
                            <ProgressBar
                                completed={60}
                                className={s.progress}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OpenedCourse
