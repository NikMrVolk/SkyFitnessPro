import { NavLink } from "react-router-dom";
import s from "./MainPage.module.css";
import { ArrCards } from "../helpers";

function Main() {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className={s.main}>
            <div className={s.header}>
                <NavLink to="/">
                    <img
                        className={s.main__top_logo}
                        src="/img/logo.svg"
                        alt="logo"
                    />
                </NavLink>
                <NavLink className="link" to="/Auth">
                    <button className={s.button} type="button">
                        Войти
                    </button>
                </NavLink>
            </div>
            <div className={s.content}>
                <div className={s.content_header}>
                    <div>
                        <p className={s.title}>
                            Онлайн-тренировки для занятий дома
                        </p>
                        <p className={s.subtitle}>
                            Начните заниматься спортом и улучшите качество жизни
                        </p>
                    </div>
                    <img
                        className={s.main__title_sticker}
                        src="/img/sale_sticker_1.svg"
                        alt="sticker"
                    />
                </div>

                {/* <div className={s.box}>
                    <NavLink to="">
                        <img
                            className={s.card}
                            src="/img/card1.svg"
                            alt="card1"
                        />
                    </NavLink>
                    <NavLink to="">
                        <img
                            className={s.card}
                            src="/img/card2.svg"
                            alt="card2"
                        />
                    </NavLink>
                    <NavLink to="">
                        <img
                            className={s.card}
                            src="/img/card3.svg"
                            alt="card3"
                        />
                    </NavLink>
                    <NavLink to="">
                        <img
                            className={s.card}
                            src="/img/card4.svg"
                            alt="card4"
                        />
                    </NavLink>
                    <NavLink to="">
                        <img
                            className={s.card}
                            src="/img/card5.svg"
                            alt="card5"
                        />
                    </NavLink>
                    </div> */}
            </div>

            <div>
                {ArrCards.map((card) => (
                    <div> {card.img} </div>
                ))}
            </div>
            <footer className={s.footer}>
                <button
                    className={s.button_two}
                    type="button"
                    onClick={handleTop}
                >
                    Наверх ↑
                </button>
            </footer>
        </main>
    );
}
export default Main;
