import { useNavigate } from 'react-router-dom'
import s from './ChooseDayWorkModal.module.css'
import { WORKOUT_ROUTE } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setWorkOut } from '../../../store/slices/courses'
import { useState } from 'react'

const ChooseDayWorkModal = ({ workOuts }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isDone, setIsDone] = useState(false)

    const { workOut } = useSelector((state) => state.courses)
    const { userID } = useSelector((state) => state.auth)
    console.log('userID', userID)

    const allProgress = workOut?.exercises?.map((el) => el.quantity)
    console.log('allProgress', allProgress)

    const userProgress = workOut?.exercises?.map((el) =>
        el.users?.filter((user) => user.userID === userID),
    )
    console.log('userProgress', userProgress) //выводит не то

    if (JSON.stringify(allProgress) == JSON.stringify(userProgress)) {
        setIsDone(true)
    }

    const handleClick = (el) => {
        dispatch(setWorkOut(el))
        localStorage.setItem('workOut', JSON.stringify(el))
        navigate(WORKOUT_ROUTE)
    }

    return (
        <div>
            <h2 className={s.modalHeader}>Выберите тренировку</h2>
            <ul className={s.modalUl}>
                {workOuts?.map((el) => (
                    <li
                        className={s.modalLi}
                        key={el.day}
                        onClick={() => handleClick(el)}
                    >
                        <div className={isDone ? s.modalBtnActive : s.modalBtn}>
                            <h3 className={s.exerciseTitle}>{el.name}</h3>
                            {isDone && (
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
