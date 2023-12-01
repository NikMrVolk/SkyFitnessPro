import { NavLink } from "react-router-dom";
import s from "./Profile.module.css";
import { useState } from "react";
import NavMenu from "../../components/navMenu/NavMenu";
import UserCourses from "../../components/userCourses/UserCourses";

function Profile() {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <NavLink to="/">
                    <img
                        className={s.headerLogo}
                        src="../img/logo.svg"
                        alt="logo"
                    />
                </NavLink>
                <div className={s.headerMenu}>
                    <div className={s.headerUser} onClick={toggleVisibility}>
                        <div className={s.userAvatar}></div>
                        <span className={s.userName}>Сергей</span>
                        <svg
                            onClick={toggleVisibility}
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="9"
                            viewBox="0 0 14 9"
                            fill="none"
                        >
                            <path
                                d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308"
                                stroke="black"
                                stroke-width="2"
                            />
                        </svg>
                    </div>
                    {visible && <NavMenu />}
                </div>
            </div>

            <div className={s.box}>
                <h1 className={s.title}>Мой профиль</h1>
                <div className={s.user}>
                    <p className={s.userLogin}>Логин: sergey.petrov96</p>
                    <p className={s.userPassword}>Пароль: 4fkhdj880d</p>
                </div>
                <div className={s.buttons}>
                    <button className={s.button}>Редактировать логин</button>
                    <button className={s.button}>Редактировать пароль</button>
                </div>
            </div>

            <div className={s.box}>
                <h1 className={s.title}>Мои курсы</h1>
                <UserCourses />
            </div>
        </div>
    );
}

export default Profile;
