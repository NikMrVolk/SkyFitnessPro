import { redirect } from 'react-router-dom'
import { COURSE_ROUTE } from '../../../utils/constants'
import s from './CoursesList.module.css'
import NavButton from '../../UI/navButton/NavButton'
import { imgCourses } from '../../../mock/сoursesData'

function CoursesList({ courses, isMainPage, setActive }) {
    const handleClick = () => {
        setActive(true)
    }


    return (
        <div className={s.courses}>
            {courses && courses.map((el, index) => (
                <div className={s.course} key={Math.random()}>
                    <span className={s.courseName}>{el.nameRU}</span>
                    <img className={s.courseImg} src={imgCourses[index].img} alt={imgCourses[index].alt} />
                    {isMainPage ? (
                        <></>
                    ) : (
                        <div className={s.btnWrapper}>
                            <NavButton onClick={handleClick}>
                                Перейти →
                            </NavButton>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CoursesList
