import s from './MainPage.module.css'

const ArrCards = [
    {
        id: 1,
        img: '/img/card1.svg',
    },
    {
        id: 2,
        img: '/img/card2.svg',
    },
    {
        id: 3,
        img: '/img/card3.svg',
    },
    {
        id: 4,
        img: '/img/card4.svg',
    },
    {
        id: 5,
        img: '/img/card5.svg',
    },
]

function MainPage() {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={s.main}>
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
            </div>

            <div>
                {ArrCards.map((card) => (
                    <img key={card.id} src={card.img} />
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
        </div>
    )
}
export default MainPage
