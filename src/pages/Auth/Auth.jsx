import { useLocation, Link } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState } from 'react'
import Input from '../../components/UI/input/Input'
import s from './Auth.module.css'

export function Auth() {
    const { pathname } = useLocation()
    const [value, setValue] = useState({
        login: '',
        password: '',
        secondPassword: '',
    })
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
                        value={value.login}
                        onChange={(e) => {
                            setValue({
                                ...value,
                                login: e.target.value,
                            })
                        }}
                    />
                    <Input
                        placeholder="Пароль"
                        classes={[s.login]}
                        type="password"
                        value={value.password}
                        onChange={(e) => {
                            setValue({
                                ...value,
                                password: e.target.value,
                            })
                        }}
                    />
                    {!isLogin && (
                        <Input
                            placeholder="Повторите пароль"
                            classes={[s.login]}
                            type="password"
                            value={value.secondPassword}
                            onChange={(e) => {
                                setValue({
                                    ...value,
                                    secondPassword: e.target.value,
                                })
                            }}
                        />
                    )}
                    <Link to={PROFILE_ROUTE}>
                        <Button color={'purple'}>
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
