import { userCourses } from '../../mock/сoursesData'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import s from './Profile.module.css'

function Profile() {
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
                <CoursesList courses={userCourses} />
            </div>
        </div>
    )
}

export default Profile
