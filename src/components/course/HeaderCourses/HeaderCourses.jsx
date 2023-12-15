import { allCourses } from '../../../mock/сoursesData'
import s from './HeaderCourses.module.css'

export default function HeaderCoursesInfo({ course }) {
    return (

        <header className={s.header}>
            <div className={s.header}>
                <h1 className={s.title}>{course.nameRU}</h1>
             <img
               className={s.img}
                src={allCourses[0].imgHeader}
                alt={allCourses[0].alt}
            />
             
            </div>
        </header>

    )
}
