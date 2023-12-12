import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'
import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE,
} from '../../../utils/constants'

const navMenuItems = [
    {
        id: 1,
        link: MAIN_ROUTE,
        name: 'Главная',
    },
    {
        id: 2,
        link: PROFILE_ROUTE,
        name: 'Профиль',
    },
    {
        id: 3,
        link: LOGIN_ROUTE,
        name: 'Выйти',
    },
]

function NavMenu() {
    return (
        <div className={s.menu}>
            <ul className={s.menuList}>
                {navMenuItems.map((el) => (
                    <>
                        <NavLink to={el.link}>
                            <li className={s.menuItem} key={el.id}>
                                {el.name}
                            </li>
                        </NavLink>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default NavMenu
