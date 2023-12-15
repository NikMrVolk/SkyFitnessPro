import { allCourses } from '../../../mock/сoursesData'
import s from './HeaderCourses.module.css'

export default function HeaderCoursesInfo() {
    return (
        <div className={s.header}>
            <h1 className={s.title}>{allCourses[0].name}</h1>
            <img
                className={s.img}
                src={allCourses[0].imgHeader}
                alt={allCourses[0].alt}
            />
        </div>
    )
}
