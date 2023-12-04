import { AllCourses } from '../mock/CoursesData'
import CoursesList from '../components/course/CoursesList/CoursesList'
import s from '../styles/pages/MainPage.module.css'

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
            <CoursesList courses={AllCourses} mainPage={true} />
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
