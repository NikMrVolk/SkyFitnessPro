import { useLocation, useNavigate, Link } from 'react-router-dom'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import Button from '../../components/UI/button/Button'
import { LOGIN_ROUTE, PROFILE_ROUTE, MAIN_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState, useEffect } from 'react'
import Input from '../../components/UI/input/Input'
import s from './Auth.module.css'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/slices/authSlice'

export function Auth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errorState, setErrorState] = useState('')

    const handleLogin = async () => {
        const auth = getAuth()
        if (!email.trim()) {
            return setError('Введите email')
        }
        if (!password.trim()) {
            return setError('Введите пароль')
        }
        if (password.length < 6) {
            return setError('Пароль должен содержать не менее 6 символов')
        }
        
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setAuth({
                        accessToken: user.accessToken,
                        email: user.email,
                        uid: user.uid,
                        refreshToken: user.stsTokenManager.refreshToken,
                    }),
                )
                navigate(PROFILE_ROUTE)
            })
            .catch((error) => {
                setErrorState(error.code)
                console.log('errorCode: ', error.code)
                console.log('errorState: ', errorState)
                switch (error.code) {
                    case 'auth/user-not-found':
                        setErrorState('Такого пользователя не существует!')
                        break
                    case 'auth/wrong-password':
                        setErrorState('Неверный пароль!')
                        break
                    default:
                        break
                }
            })
    }

    const handleRegister = async () => {
        const auth = getAuth()
        if (!email.trim()) {
            return setErrorState('Введите email')
        }
        if (!password.trim()) {
            return setErrorState('Введите пароль')
        }
        if (password.length < 6) {
            return setErrorState('Пароль должен содержать не менее 6 символов')
        }
        if (password.trim() !== repeatPassword.trim()) {
            setErrorState('Пароли не совпадают')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    dispatch(
                        setAuth({
                            accessToken: user.accessToken,
                            email: user.email,
                            uid: user.uid,
                            refreshToken: user.stsTokenManager.refreshToken,
                        }),
                    )
                    navigate(PROFILE_ROUTE)
                })
                .catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                    switch (error.code) {
                        case 'auth/email-already-exists':
                            setErrorState('Адрес электронной почты уже используется существующим пользователем')
                            break
                        case 'auth/invalid-email':
                            setErrorState('Введен невалидный email')
                            break
                        default:
                            break
                    }
                })
        }
    }
    const isLogin = pathname === LOGIN_ROUTE

    useEffect(() => {
        setErrorState(null);
      }, [ email, password, repeatPassword]);
    return (
        <div className={s.page}>
            <div className={s.wrapper}>
                <form className={s.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={s.modalLogo}>
                        <img src="/img/logo/blackLogo.svg" alt="logo" />
                    </div>
                    <Input
                        placeholder="Логин"
                        classes={[s.login]}
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <Input
                        placeholder="Пароль"
                        classes={[s.login]}
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    {!isLogin && (
                        <Input
                            placeholder="Повторите пароль"
                            classes={[s.login]}
                            type="password"
                            onChange={(e) => {
                                setRepeatPassword(e.target.value)
                            }}
                        />
                    )}
                    {errorState && <div className={s.inputError}>{errorState} </div>}
                    <Link to={PROFILE_ROUTE}>
                        <Button
                            color={'purple'}
                            onClick={isLogin ? handleLogin : handleRegister}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Link>
                    <Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                        <Button color={'light'}>
                            {!isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
