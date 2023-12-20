import { useParams } from 'react-router-dom'
import HeaderCoursesInfo from '../../components/course/HeaderCourses/HeaderCourses'
import FittingCoursesInfo from '../../components/course/FittingCourses/FittingCourses'
import DirectionsCoursesInfo from '../../components/course/DirectionsCourses/DirectionsCourses'
import SubmitApplication from '../../components/course/SubmitApplication/SubmitApplication'
import { useSelector } from 'react-redux'
import s from './Course.module.css'

export default function CoursesInfoPage() {
    const { id } = useParams()
    const { allCourses } = useSelector((state) => state.courses)
    const course = allCourses.find((item) => item._id === id)


    return (
        <div className={s.coursesDiv + ' ' + s.center}>
            <HeaderCoursesInfo course={course} />
            <section>
                <FittingCoursesInfo course={course} />
                <DirectionsCoursesInfo course={course} />
                <p className={s.description}>{course.description}</p>
                <SubmitApplication course={course} />
            </section>
        </div>
    )
}
