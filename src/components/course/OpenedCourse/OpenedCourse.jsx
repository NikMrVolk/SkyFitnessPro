import YouTube from 'react-youtube'
import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../../UI/button/Button'
import s from './OpenedCourse.module.css'

const exercises = [
    {
        id: 1,
        text: 'Наклон вперед',
        repetition: '(10 повторений)',
    },
    {
        id: 2,
        text: 'Наклон назад',
        repetition: '(10 повторений)',
    },
    {
        id: 3,
        text: 'Поднятие ног, согнутых в коленях',
        repetition: '(5 повторений)',
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
                    <Button>Заполнить свой прогресс</Button>
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
