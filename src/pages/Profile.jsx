import s from '../styles/pages/Profile.module.css'
import UserCourses from '../components/course/UserCourses'
import Button from '../components/UI/button/Button'

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
                <Button text={"Редактировать логин"} color={"purple"} ></Button>
                <Button text={"Редактировать пароль"} color={"purple"} ></Button>
                </div>
            </div>

            <div className={s.box}>
                <h1 className={s.title}>Мои курсы</h1>
                <UserCourses />
            </div>
        </div>
    )
}

export default Profile
