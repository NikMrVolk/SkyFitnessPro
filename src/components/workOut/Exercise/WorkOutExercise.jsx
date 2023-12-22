import ProgressBar from '@ramonak/react-progress-bar'
import Button from '../../UI/button/Button'
import { progress } from '../../../mock/progressBar'
import s from './WorkOutExercise.module.css'

const WorkOutExercise = ({ workOut, result, setModalActive }) => {
    const workOutDay = workOut.day.split('/')[1].split(' ')[1]
    const isDone = JSON.parse(localStorage.getItem('isDone'))
    
    return (
        <div className={s.work}>
            <div className={s.exercises}>
                <h2>Упражнения</h2>
                <ol className={s.ul}>
                    {workOut.exercises?.map((el) => (
                        <li key={el.name}>{el.name}</li>
                    ))}
                </ol>
                <Button color={'purple'} onClick={() => setModalActive(true)} disabled={isDone}>
                    Заполнить свой прогресс
                </Button>
            </div>
            <div className={s.result}>
                <h2>Мой прогресс по тренировке {workOutDay}:</h2>
                {workOut.exercises?.map((el, index) => (
                    <div key={el.name} className={s.exercise}>
                        <h3>{el?.name.split('(')[0]}</h3>
                        {(result || result === 0) && (
                            <ProgressBar
                                {...progress[index]}
                                completed={result[index]}
                                className={s.progress}
                                labelClassName={s.barLabel}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkOutExercise
