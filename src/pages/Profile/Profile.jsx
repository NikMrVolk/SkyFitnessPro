import { userCourses, exercises } from '../../mock/сoursesData'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import s from './Profile.module.css'
import Modal from '../../components/UI/modal/Modal'
import { useState } from 'react'

function Profile() {
    const [modalActive, setModalActive] = useState(false)
    // const [isDone, setIsDone] = useState(false)

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <h1 className={s.title}>Мой профиль</h1>
                <div className={s.user}>
                    <p className={s.userLogin}>Логин: sergey.petrov96</p>
                    <p className={s.userPassword}>Пароль: 4fkhdj880d</p>
                </div>
                <div className={s.buttons}>
                    <button className={s.button}>Редактировать логин</button>
                    <button className={s.button}>Редактировать пароль</button>
                </div>
            </div>

            <div className={s.box}>
                <h1 className={s.title}>Мои курсы</h1>
                <CoursesList courses={userCourses} setActive={setModalActive} />
                <Modal active={modalActive} setActive={setModalActive}>
                    <h2 className={s.modalHeader}>Выберите тренировку</h2>
                    <ul className={s.modalUl}>
                        {exercises.map((el) => (
                            <li
                                className={s.modalLi}
                                key={el.id}
                                // onClick={() => setIsDone(!isDone)}
                            >
                                <div
                                    className={
                                        el.done ? s.modalBtnActive : s.modalBtn
                                    }
                                >
                                    <div className={s.bthHeader}>
                                        <h3 className={s.btnText}>{el.text}</h3>
                                        {el.done ? (
                                            <img
                                                className={s.modalImg}
                                                src="../img/isDone.svg"
                                                alt="isDone"
                                            />
                                        ) : null}
                                    </div>
                                    <p className={s.btnP}>{el.day}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Modal>
            </div>
        </div>
    )
}

export default Profile
