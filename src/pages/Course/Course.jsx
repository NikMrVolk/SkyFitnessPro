import HeaderCoursesInfo from '../../components/course/HeaderCourses/HeaderCourses'
import FittingCoursesInfo from '../../components/course/FittingCourses/FittingCourses'
import DirectionsCoursesInfo from '../../components/course/DirectionsCourses/DirectionsCourses'
import SubmitApplication from '../../components/course/SubmitApplication/SubmitApplication'
import OpenedCourse from '../../components/course/OpenedCourse/OpenedCourse'
import { useSelector } from 'react-redux'
import s from './Course.module.css'

export default function CoursesInfoPage() {
    const { isAuth } = useSelector((state) => state.profile)
    console.log(isAuth)

    if (isAuth) return <OpenedCourse />

    return (
        <div className={s.coursesDiv + ' ' + s.center}>
            <HeaderCoursesInfo />
            <section>
                <FittingCoursesInfo />
                <DirectionsCoursesInfo />
                <p className={s.description}>
                    Это философия здорового образа жизни. Тот, кто занимается
                    йогой, становится здоровее и выносливее, после занятий
                    чувствует прилив сил, а также с новой силой может ощутить
                    вкус к жизни. Благодаря комплексному воздействию упражнений
                    происходит проработка всех групп мышц, тренировка суставов,
                    улучшается циркуляция крови. Кроме того, упражнения дарят
                    отличное настроение, заряжают бодростью и помогают
                    противостоять стрессам.
                </p>
                <SubmitApplication />
            </section>
        </div>
    )
}
