import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Auth.module.css";


export function Auth() {
  const [showSignupInput, setShowSignupInput] = useState(false);

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowSignupInput(true);
  };

  return (
    <div className={s.login}>
     
      <form className={s.loginForm}>
        <Link to="/">
          <img className={s.login__form_img} src="img/logo.svg" alt="" />
        </Link>

        <input
          placeholder="Логин"
          className={s.login__form_input}
          type="text"
        />
        <input
          placeholder="Пароль"
          className={s.login__form_input}
          type="password"
        />
        {showSignupInput ? (
          <input
            placeholder="Повторите пароль"
            className={s.login__form_input}
            type="password"
          />
        ) : (
          <button className={s.login__form_signin} type="button">Войти</button>
        )}
        <button
          className={
            showSignupInput ? s.login__form_signin : s.login__form_signup
          } type="button"
          onClick={handleSignupClick}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}