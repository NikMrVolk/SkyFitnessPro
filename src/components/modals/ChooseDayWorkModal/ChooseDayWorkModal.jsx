import { Link } from 'react-router-dom'
import { exercises } from '../../../mock/сoursesData'
import s from './ChooseDayWorkModal.module.css'
import { COURSE_ROUTE } from '../../../utils/constants'

const ChooseDayWorkModal = ({ workOuts }) => {
    console.log(workOuts)
    return (
        <div>
            <h2 className={s.modalHeader}>Выберите тренировку</h2>
            <ul className={s.modalUl}>
                {workOuts?.map((el) => (
                    <li className={s.modalLi} key={el.id}>
                        <Link to={COURSE_ROUTE}>
                            <div
                                className={
                                    el.done ? s.modalBtnActive : s.modalBtn
                                }
                            >
                                <h3 className={s.exerciseTitle}>{el.name}</h3>
                                {el.done && (
                                    <img
                                        className={s.modalImg}
                                        src="../img/isDone.svg"
                                        alt="isDone"
                                    />
                                )}
                                <p className={s.exerciseDay}>{el.day}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChooseDayWorkModal
