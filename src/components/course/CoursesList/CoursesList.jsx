import { COURSE_ROUTE } from '../../../utils/constants'
import { useNavigate } from 'react-router'
import s from './CoursesList.module.css'
import NavButton from '../../UI/navButton/NavButton'
import { imgCourses } from '../../../mock/сoursesData'

function CoursesList({ courses, isMainPage, setActive, profile = false }) {
    const navigate = useNavigate()

    const handleClick = () => {
        setActive(true)
    }

    const imgCourse = ({ idCourse }) => {
        // const imgEl = imgCourses.find((item) => item.id === idCourse)
        const imgEl = imgCourses.filter((item) => item.id?.includes(idCourse))
        console.log('imgEl', imgEl)
        return imgEl.img
    }

    return (
        <div className={s.courses}>
            {courses &&
                courses.map((el, index) => (
                    <div
                        className={s.course}
                        key={Math.random()}
                        onClick={() =>
                            !profile && navigate(`/course/${el._id}`)
                        }
                    >
                        <span className={s.courseName}>{el.nameRU}</span>
                        <img
                            className={s.courseImg}
                            src={`../img/courses/${el.nameEN}.svg`}
                            alt={el.nameRU}
                        />
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
