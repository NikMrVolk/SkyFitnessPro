import { useSelector, useDispatch } from 'react-redux'
import bcrypt from 'bcryptjs'
// const bcrypt = require('bcryptjs');
import CoursesList from '../../components/course/CoursesList/CoursesList'
import s from './Profile.module.css'
import Modal from '../../components/UI/modal/Modal'
import { useState, useEffect } from 'react'
import Button from '../../components/UI/button/Button'
import Input from '../../components/UI/input/Input'
import { toast } from 'react-toastify'
import {
    getAuth,
    updateEmail,
    onAuthStateChanged,
    verifyBeforeUpdateEmail,
    updatePassword,
} from 'firebase/auth'
import { setAuth } from '../../store/slices/authSlice'

function Profile() {
    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState(false)
    const [modalChangeDataActive, setModalChangeDataActive] = useState(false)
    const { userName, userID, hashPassword } = useSelector(
        (state) => state.auth,
    )
    const { allCourses } = useSelector((state) => state.courses)
    const [isChangeLogin, setIsChangeLogin] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const auth = getAuth()
    const user = auth?.currentUser
    const comparePassword = bcrypt.compareSync(oldPassword, hashPassword)
    const hashNewPassword = bcrypt.hashSync(newPassword, 5)

    useEffect(() => {
        console.log('comparePassword', comparePassword)
    }, [comparePassword])

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
                    hashPassword: hashNewPassword,
                }),
            )
        }
    }, [user?.email, newEmail, user?.emailVerified])

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         dispatch(
    //             setAuth({
    //                 accessToken: user.accessToken,
    //                 email: user.email,
    //                 uid: user.uid,
    //                 refreshToken: user.stsTokenManager.refreshToken,
    //                 hashPassword: hashNewPassword,
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

    const handleUpdatePassword = () => {
        if (!comparePassword) {
            toast('Неверно введен старый пароль', { className: s.error })
            return
        }

        if (newPassword !== repeatNewPassword) {
            toast('Пароли не совпадают', { className: s.error })
            return
        }
        updatePassword(user, newPassword)
            .then(() =>
                toast.success('Пароль успешно изменен', {
                    className: s.success,
                }),
            )
            .catch((error) => toast(error.message, { className: s.error }))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.box}>
                <h1 className={s.title}>Мой профиль</h1>
                <div className={s.user}>
                    <p className={s.userLogin}>Email: {userName}</p>
                    {/* <p className={s.userPassword}>Пароль: {comparePassword}</p> */}
                </div>
                <div className={s.buttons}>
                    <Button
                        color="purple"
                        onClick={() => {
                            setModalChangeDataActive(true)
                            setIsChangeLogin(true)
                        }}
                    >
                        Редактировать email
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
                        {!isChangeLogin && (
                            <>
                                <h4 className={s.textChangeData}>
                                    Введите старый пароль:
                                </h4>

                                <Input
                                    placeholder=" Введите старый пароль:"
                                    onChange={(event) =>
                                        setOldPassword(event.target.value)
                                    }
                                />
                            </>
                        )}

                        <h3 className={s.textChangeData}>
                            {' '}
                            {isChangeLogin
                                ? 'Введите новый email:'
                                : 'Введите новый пароль:'}
                        </h3>

                        <Input
                            placeholder={isChangeLogin ? 'Email' : 'Пароль'}
                            onChange={(event) => {
                                isChangeLogin
                                    ? setNewEmail(event.target.value)
                                    : setNewPassword(event.target.value)
                            }}
                        />

                        {!isChangeLogin && (
                            <>
                                <h4 className={s.textChangeData}>
                                    Повторите новый пароль:
                                </h4>

                                <Input
                                    placeholder="Повторите новый пароль:"
                                    onChange={(event) =>
                                        setRepeatNewPassword(event.target.value)
                                    }
                                />
                            </>
                        )}
                        <Button
                            color="purple"
                            onClick={() => {
                                setModalChangeDataActive(false),
                                    isChangeLogin
                                        ? handleUpdateEmail()
                                        : handleUpdatePassword()
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
