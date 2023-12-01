// import { NavLink } from "react-router-dom";
import s from "./Auth.module.css";

function Auth() {
    return (
        <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.modal}>
            <form className={s.modal__form_login}>
              <div className={s.modal__logo}>
                  <img className={s.modal__logo_img} src="/img/logo.svg" alt="logo" />
                </div>
           
              <input
              className={s.modal__input_login}
              type="text"
              name="login"
              placeholder="Почта"
            />
              <input
              className={s.modal__input_password_first}
              type="password"
              name="password"
              placeholder="Пароль"
            />
             <input
              className={s.modal__input_password_double}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button  className={s.modal__btn_signup_ent} type="button" to="/">Войти </button>
            <button  className={s.modal__btn_signup_ent} type="button" to="/"> Зарегистрироваться </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Auth;
