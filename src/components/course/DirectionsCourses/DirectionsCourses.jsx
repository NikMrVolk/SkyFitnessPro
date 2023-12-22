import styleTitle from '../FittingCourses/FittingCourses.module.css'
import s from './DirectionsCourses.module.css'

export default function DirectionsCoursesInfo({ course }) {
    return (
        <div>
            <h2 className={styleTitle.h2 + ' ' + s.titlePadding}>
                Направления:
            </h2>
            <ul className={course.directions.length > 3 ? s.ul2 : s.ul1}>
                {course.directions.map((item) => (
                    <li key={Math.random()} className={s.li}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
