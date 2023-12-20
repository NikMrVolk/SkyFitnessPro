import { useSelector, useDispatch } from 'react-redux'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import s from './Profile.module.css'
import Modal from '../../components/UI/modal/Modal'
import { useState, useEffect } from 'react'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import {
    getAuth,
    updateEmail,
    onAuthStateChanged,
    verifyBeforeUpdateEmail,
} from 'firebase/auth'
import { toast } from 'react-toastify'
import { setAuth } from '../../store/slices/authSlice'

function Profile() {

    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState(false)
    const [modalChangeDataActive, setModalChangeDataActive] = useState(false)
    const { userName, userID } = useSelector((state) => state.auth)
    const { allCourses } = useSelector((state) => state.courses)
    const [newEmail, setNewEmail] = useState('')
    const auth = getAuth()
    const user = auth?.currentUser

    const coursesUser = allCourses.filter((item) =>
        item.users?.includes(userID),
    )


    useEffect(() => {
        if (user?.emailVerified) {
            // Если адрес электронной почты подтвержден, обновляем данные в локальном хранилище
            dispatch(
                setAuth({
                    accessToken: user.accessToken,
                    email: user.email,
                    uid: user.uid,
                    refreshToken: user.stsTokenManager.refreshToken,
                }),
            )
        }
    }, [user?.email, newEmail, user?.emailVerified])

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log('user1', user)
    //         dispatch(
    //             setAuth({
    //                 accessToken: user.accessToken,
    //                 email: user.email,
    //                 uid: user.uid,
    //                 refreshToken: user.stsTokenManager.refreshToken,
    //             }),
    //         )
    //     }
    // })

    const handleUpdateEmail = () => {
        return verifyBeforeUpdateEmail(user, newEmail)
            .then(() => {
                return updateEmail(user, newEmail)
            })
            .then(() => {
                console.log('адрес электронной почты успешно обновлен')
            })
            .catch((error) => {
                // if (
                //     error.message ==
                //     'Firebase: Error (auth/requires-recent-login).'
                // ) {
                //     firebase.user.reauthenticate(credential)
                // }
                toast.success(
                    'Пожалуйста, проверьте свою электронную почту, чтобы подтвердить новый адрес электронной почты. После подтверждения новой почты повторно авторизуйтесь в приложение.',
                    { className: s.success },
                )
            })
    }


    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <h1 className={s.title}>Мой профиль</h1>
                <div className={s.user}>
                    <p className={s.userLogin}>Email: {userName}</p>
                </div>
                <div className={s.buttons}>
                    <Button
                        color="purple"
                        onClick={() => {
                            setModalChangeDataActive(true)
                        }}
                    >
                        Редактировать email
                    </Button>
                </div>
            </div>
            <div className={s.box}>
                <h2 className={s.title}>Мои курсы</h2>
                <CoursesList courses={coursesUser} profile />
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
                            Введите новый email:
                        </h3>
                        <Input
                            placeholder="Логин"
                            onChange={(event) => {
                                setNewEmail(event.target.value)
                            }}
                        />
                        <Button
                            color="purple"
                            onClick={() => {
                                setModalChangeDataActive(false),
                                    handleUpdateEmail()
                            }}
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
