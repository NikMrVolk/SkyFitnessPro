import { redirect } from 'react-router-dom'
import { COURSE_ROUTE } from '../../../utils/constants'
import s from './CoursesList.module.css'
import NavButton from '../../UI/navButton/NavButton'

function CoursesList({ courses, isMainPage, setActive }) {
    const handleClick = () => {
        setActive(true)
    }

    return (
        <div className={s.courses}>
            {courses.map((el) => (
                <div className={s.course} key={el.id}>
                    <span className={s.courseName}>{el.name}</span>
                    <img className={s.courseImg} src={el.img} alt={el.alt} />
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
