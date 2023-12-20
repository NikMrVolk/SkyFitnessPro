import { useLocation, useNavigate } from 'react-router-dom'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { toast } from 'react-toastify'
import Button from '../../components/UI/button/Button'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState } from 'react'
import Input from '../../components/UI/input/Input'
import s from './Auth.module.css'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/slices/authSlice'
import {
    samePasswords,
    validateEmail,
    validatePassword,
} from '../../utils/authValidate'

export default function Auth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [validationError, setValidationError] = useState('')
    const isLogin = pathname === LOGIN_ROUTE

    const auth = async () => {
        const emailAfterTrim = email.trim()

        if (
            validateEmail(email, setValidationError) &&
            validatePassword(password, setValidationError) &&
            (isLogin ||
                samePasswords(password, repeatPassword, setValidationError))
        ) {
            const auth = getAuth()

            let authPromise
            if (isLogin) {
                authPromise = signInWithEmailAndPassword(
                    auth,
                    emailAfterTrim,
                    password,
                )
            } else {
                authPromise = createUserWithEmailAndPassword(
                    auth,
                    emailAfterTrim,
                    password,
                )
            }
            authPromise
                .then(({ user }) => {
                    dispatch(
                        setAuth({
                            accessToken: user.accessToken,
                            email: user.email,
                            uid: user.uid,
                            refreshToken: user.stsTokenManager.refreshToken,
                        }),
                    )
                    setValidationError('')
                    navigate(PROFILE_ROUTE)
                })
                .catch((e) => {
                    toast(e.code)
                })
        }
    }

    return (
        <div className={s.page}>
            <div className={s.wrapper}>
                <form className={s.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={s.modalLogo}>
                        <img src="/img/logo/blackLogo.svg" alt="logo" />
                    </div>
                    <Input
                        placeholder="Логин"
                        classes={[
                            s.login,
                            validationError === 'email' && s.error,
                        ]}
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Пароль"
                        classes={[
                            s.login,
                            validationError === 'password' && s.error,
                        ]}
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    {!isLogin && (
                        <Input
                            placeholder="Повторите пароль"
                            classes={[
                                s.login,
                                validationError === 'password' && s.error,
                            ]}
                            type="password"
                            onChange={(e) => {
                                setRepeatPassword(e.target.value)
                            }}
                        />
                    )}
                    <Button color={'purple'} onClick={auth}>
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    <Button
                        color={'light'}
                        onClick={() =>
                            navigate(isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE)
                        }
                    >
                        {!isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </form>
            </div>
        </div>
    )
}
