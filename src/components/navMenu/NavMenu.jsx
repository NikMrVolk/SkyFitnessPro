import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.css";

function NavMenu() {
    return (
        <div className={s.menu}>
            <ul className={s.menuList}>
                <NavLink to="/">
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="">
                            Главная
                        </a>
                    </li>
                </NavLink>
                <NavLink to="/profile">
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="">
                            Профиль
                        </a>
                    </li>
                </NavLink>
                <NavLink to="/login">
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="">
                            Выйти
                        </a>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

export default NavMenu;
