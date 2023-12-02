import HeaderCoursesInfo from '../../components/course/HeaderCourses/HeaderCourses'
import FittingCoursesInfo from '../../components/course/FittingCourses/FittingCourses'
import DirectionsCoursesInfo from '../../components/course/DirectionsCourses/DirectionsCourses'
import SubmitApplication from '../../components/course/SubmitApplication/SubmitApplication'
import s from './CoursesInfo.module.css'

export default function CoursesInfoPage() {

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
