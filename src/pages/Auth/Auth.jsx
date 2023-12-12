import { useLocation, useNavigate, Link } from 'react-router-dom'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import Button from '../../components/UI/button/Button'
import { LOGIN_ROUTE, PROFILE_ROUTE, MAIN_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState } from 'react'
import Input from '../../components/UI/input/Input'
import s from './Auth.module.css'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/slices/profileSlice'
import { setAuth } from '../../store/slices/authSlice'

export function Auth() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async () => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setAuth({ user }))
                console.log(user)
                console.log(user.uid)
                navigate({MAIN_ROUTE});
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            })
    }

    const handleRegister = async () => {
        const auth = getAuth()
        if (password !== repeatPassword) {
            setError('Пароли не совпадают')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    dispatch(setAuth({ user }))
                    console.log(user)
                    console.log(user.uid)
                    navigate({MAIN_ROUTE});
                })
                .catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                })
        }
    }

    const isLogin = pathname === LOGIN_ROUTE

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
                    <Link to={PROFILE_ROUTE}>
                        <Button
                            color={'purple'}
                            onClick={() => {
                                dispatch(logIn()),
                                    isLogin ? handleLogin() : handleRegister()
                            }}
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
