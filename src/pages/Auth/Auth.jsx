import { NavLink } from 'react-router-dom'
import s from './Auth.module.css'
import Button from '../../components/UI/button/Button'
import { MAIN_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState } from 'react'

export function Auth() {
    const [isLogin, setIsLogin] = useState(false)
    const handleIsLogin = () => {
        setIsLogin(true)
    }

    return (
        <div className={s.page}>
            <div className={s.wrapper}>
                <form className={s.form}>
                    <div className={s.modalLogo}>
                        <NavLink to={MAIN_ROUTE}>
                            <img src="/img/logo/blackLogo.svg" alt="logo" />
                        </NavLink>
                    </div>
                    {isLogin ? (
                        <>
                            <input
                                placeholder="Логин"
                                className={s.login}
                                type="text"
                            />
                            <input
                                placeholder="Пароль"
                                className={s.login}
                                type="password"
                            />
                            <input
                                placeholder="Повторите пароль"
                                className={s.login}
                                type="password"
                            />

                            <Button
                                text={'Зарегистрироваться'}
                                color={'purple'}
                            ></Button>
                        </>
                    ) : (
                        <>
                            <input
                                placeholder="Логин"
                                className={s.login}
                                type="text"
                            />
                            <input
                                placeholder="Пароль"
                                className={s.login}
                                type="password"
                            />
                            <Button text={'Войти'} color={'purple'}>
                                {' '}
                            </Button>
                            <NavLink to={REGISTRATION_ROUTE}>
                                <Button
                                    text={'Зарегистрироваться'}
                                    color={'light'}
                                    onClick={handleIsLogin}
                                ></Button>
                            </NavLink>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}
