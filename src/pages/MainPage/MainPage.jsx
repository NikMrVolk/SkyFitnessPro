import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CoursesList from '../../components/course/CoursesList/CoursesList'
import NavButton from '../../components/UI/navButton/NavButton'
import s from './MainPage.module.css'
import { useGetCoursesQuery } from '../../services/courses'
import { getAllCourses } from '../../store/slices/courses'


function MainPage() {
    const dispatch = useDispatch()

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    const { data, isError, isLoading } = useGetCoursesQuery()
    const { allCourses } = useSelector((state) => state.courses)

    useEffect(() => {
        if (data) {
            dispatch(
                getAllCourses({
                    allCourses: Object.values(data).sort(
                        (a, b) => a.order - b.order,
                    ),
                }),
            )
        }
    }, [data])

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
