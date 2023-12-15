import { useSelector } from 'react-redux'
import { userCourses } from '../../mock/сoursesData'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import s from './Profile.module.css'
import Modal from '../../components/UI/modal/Modal'
import { useState } from 'react'
import Button from '../../components/UI/button/Button'
import ChooseDayWorkModal from '../../components/modals/ChooseDayWorkModal/ChooseDayWorkModal'
import Input from '../../components/UI/input/Input'

function Profile() {
    const [modalActive, setModalActive] = useState(false)
    const [modalChangeDataActive, setModalChangeDataActive] = useState(false)
    const [isChangeLogin, setIsChangeLogin] = useState(false)
    const { userName } = useSelector((state) => state.auth)
    const { allCourses } = useSelector((state) => state.courses)
    

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <h1 className={s.title}>Мой профиль</h1>
                <div className={s.user}>
                    <p className={s.userLogin}>Логин: {userName}</p>
                    <p className={s.userPassword}>Пароль: 4fkhdj880d</p>
                </div>
                <div className={s.buttons}>
                    <Button
                        color="purple"
                        onClick={() => {
                            setModalChangeDataActive(true)
                            setIsChangeLogin(true)
                        }}
                    >
                        Редактировать логин
                    </Button>
                    <Button
                        color="purple"
                        onClick={() => {
                            setModalChangeDataActive(true)
                            setIsChangeLogin(false)
                        }}
                    >
                        Редактировать пароль
                    </Button>
                </div>
            </div>
            <div className={s.box}>
                <h1 className={s.title}>Мои курсы</h1>
                <CoursesList
                    courses={userCourses}
                    setActive={setModalActive}
                    profile
                />
                <Modal active={modalActive} setActive={setModalActive}>
                    <ChooseDayWorkModal />
                </Modal>
                <Modal
                    active={modalChangeDataActive}
                    setActive={setModalChangeDataActive}
                >
                    <img src="/img/logo/blackLogo.svg" alt="logo" />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            width: '278px',
                        }}
                    >
                        <h3 className={s.textChangeData}>
                            {' '}
                            {isChangeLogin ? 'Новый логин:' : 'Новый пароль:'}
                        </h3>
                        <Input
                            placeholder={isChangeLogin ? 'Логин' : 'Пароль'}
                        />
                        {!isChangeLogin && (
                            <Input placeholder="Повторите пароль" />
                        )}
                        <Button
                            color="purple"
                            onClick={() => setModalChangeDataActive(false)}
                        >
                            Cохранить
                        </Button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Profile
