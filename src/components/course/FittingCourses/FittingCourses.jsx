import s from './FittingCourses.module.css'

export default function FittingCoursesInfo({ course }) {
    return (
        <div>
            <h2 className={s.h2}>Подойдет для вас, если:</h2>
            <ul className={s.ul}>
                {course?.fitting.map((item, index) => (
                    <div className={s.div} key={Math.random()}>
                        <div className={s.numberDiv}>
                            <span className={s.numberSpan}>{index + 1}</span>
                        </div>
                        <li className={s.li}>{item}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
