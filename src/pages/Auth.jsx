import { NavLink } from "react-router-dom";
import s from "../styles/pages/Auth.module.css";
import { useState } from "react";
import Button from "../components/UI/button/Button";


export function Auth() {
    const [showSignupInput, setShowSignupInput] = useState(false);
    const handleSignupClick = (e) => {
        e.preventDefault();
        setShowSignupInput(true);
      };
    return (
   <div className={s.page}>
      <div className={s.wrapper}>
                <div className={s.modalBlock}>
                    <form className={s.form}>
                        <div className={s.modalLogo}>
                            <NavLink to="/">
                                <img src="/img/logo/blackLogo.svg" alt="logo" />
                            </NavLink>
                        </div>
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
          {showSignupInput ? (

             <input
             placeholder="Повторите пароль"
             className={s.login}
             type="password"
           />
           ) : (
           
            <Button >
               Войти
           </Button>
            
            )}
            
            <Button onClick={handleSignupClick}>
              Зарегистрироваться

            </Button>
            
                    </form>
                </div>
                </div>
                </div>   
    );
}

