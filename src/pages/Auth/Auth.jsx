import { NavLink } from 'react-router-dom'
import s from './Auth.module.css'

export function Auth() {
    return (
        <div className={s.modalBlock}>
            <form className={s.form}>
                <div className={s.modalLogo}>
                    <NavLink to="/">
                        <img src="/img/logo/blackLogo.svg" alt="logo" />
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
