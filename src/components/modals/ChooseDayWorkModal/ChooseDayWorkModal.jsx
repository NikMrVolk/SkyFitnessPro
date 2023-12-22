import { useNavigate } from 'react-router-dom'
import s from './ChooseDayWorkModal.module.css'
import { WORKOUT_ROUTE } from '../../../utils/constants'
import { useDispatch } from 'react-redux'
import { setWorkOut } from '../../../store/slices/courses'

const ChooseDayWorkModal = ({ workOuts, isDone }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (el, isDone) => {
        dispatch(setWorkOut(el))
        localStorage.setItem('workOut', JSON.stringify(el))
        localStorage.setItem('isDone', JSON.stringify(isDone))
        navigate(WORKOUT_ROUTE)
    }

    return (
        <div>
            <h2 className={s.modalHeader}>Выберите тренировку</h2>
            <ul className={s.modalUl}>
                {workOuts?.map((el, index) => (
                    <li
                        className={isDone[index] ? s.modalLiActive : s.modalLi}
                        key={el.day}
                        onClick={() => handleClick(el, isDone[index])}
                    >
                        <div
                            className={
                                isDone[index] ? s.modalBtnActive : s.modalBtn
                            }
                        >
                            <h3 className={s.exerciseTitle}>{el.name}</h3>
                            {isDone[index] && (
                                <img
                                    className={s.modalImg}
                                    src="../img/isDone.svg"
                                    alt="isDone"
                                />
                            )}
                            <p className={s.exerciseDay}>{el.day}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChooseDayWorkModal
