import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HeaderCoursesInfo from '../../components/course/HeaderCourses/HeaderCourses'
import FittingCoursesInfo from '../../components/course/FittingCourses/FittingCourses'
import DirectionsCoursesInfo from '../../components/course/DirectionsCourses/DirectionsCourses'
import SubmitApplication from '../../components/course/SubmitApplication/SubmitApplication'
import { useSelector } from 'react-redux'
import s from './Course.module.css'
import { useGetCourseQuery } from '../../services/courses'
import { setCourse } from '../../store/slices/courses'

export default function CoursesInfoPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useGetCourseQuery(id)
    const { allCourses, course } = useSelector((state) => state.courses)

    useEffect(() => {
        if (data) {
            dispatch(setCourse({ course: data }))
        }
    }, [data])
   

    return (
        <div className={s.coursesDiv + ' ' + s.center}>
            {course && (
                <>
                    <HeaderCoursesInfo course={course} />
                    <section>
                        <FittingCoursesInfo course={course} />
                        <DirectionsCoursesInfo course={course} />
                        <p className={s.description}>{course.description}</p>
                        <SubmitApplication id={id}/>
                    </section>
                </>
            )}
        </div>
    )
}
