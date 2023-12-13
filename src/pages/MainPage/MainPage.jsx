import { allCourses } from '../../mock/сoursesData'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import NavButton from '../../components/UI/navButton/NavButton'
import s from './MainPage.module.css'
import { useGetCoursesQuery } from '../../services/courses'

function MainPage() {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    const { data, isError, isLoading } = useGetCoursesQuery()
    console.log('coursesData', data)
    console.log('isErrorCourses', isError)

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
            <CoursesList courses={allCourses} isMainPage={true} />
            <footer className={s.footer}>
                <NavButton onClick={handleTop}>Наверх ↑</NavButton>
            </footer>
        </div>
    )
}
export default MainPage
