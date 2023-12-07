import { NavLink } from 'react-router-dom'
import s from './Auth.module.css'
import Button from '../../components/UI/button/Button'
import { MAIN_ROUTE } from '../../utils/constants'
import { REGISTRATION_ROUTE } from '../../utils/constants'
import { useState } from 'react'
import Input from '../../components/UI/input/Input'

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
                            <Input
                                placeholder="Логин"
                                // classes={[]}
                                type="text"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            />
                            <Input
                                placeholder="Пароль"
                                type="password"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            />

                            <Input
                                placeholder="Повторите пароль"
                                type="password"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            />

                            <Button
                                text={'Зарегистрироваться'}
                                color={'purple'}
                            ></Button>
                        </>
                    ) : (
                        <>
                            <Input
                                placeholder="Логин"
                                type="text"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
                            />
                            <Input
                                placeholder="Пароль"
                                type="password"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }}
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
