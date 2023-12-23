import { NavLink, useLocation } from 'react-router-dom'
import s from './NavMenu.module.css'
import { MAIN_ROUTE, PROFILE_ROUTE } from '../../../utils/constants'

const navMenuItems = [
    {
        link: MAIN_ROUTE,
        name: 'Главная',
    },
    {
        link: PROFILE_ROUTE,
        name: 'Профиль',
    },
    {
        name: 'Выйти',
    },
]

function NavMenu() {
    const handleLogout = () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('isVideoWatched')
        window.location.href = '/'
    }
    const location = useLocation()

    return (
        <div className={s.menu}>
            <ul className={s.menuList}>
                {navMenuItems.map((el) => (
                    <NavLink
                        to={el.link}
                        key={Math.random()}
                        className={
                            el.link === location.pathname && s.activeLink
                        }
                        onClick={el.name === 'Выйти' && handleLogout}
                    >
                        <li className={s.menuItem}>{el.name}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default NavMenu
