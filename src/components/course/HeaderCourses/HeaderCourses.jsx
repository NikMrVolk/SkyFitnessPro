import { allCourses } from '../../../mock/сoursesData'
import s from './HeaderCourses.module.css'
import { imgCourses } from '../../../mock/сoursesData'

export default function HeaderCoursesInfo({ course }) {
    return (
        <header className={s.header}>
            <div className={s.header}>
                <h1 className={s.title}>{course.nameRU}</h1>
                <img
                    className={s.img}
                    src={imgCourses[course.order - 1].imgHeader}
                    alt={imgCourses[course.order - 1].alt}
                />
            </div>
        </header>
    )
}
