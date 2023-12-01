import s from "./CoursesInfo.module.css";
import HeaderCoursesInfo from "../../components/coursesInfoHeader/HeaderCourses";
import FittingCoursesInfo from "../../components/coursesInfoFitting/FittingCourses";
import DirectionsCoursesInfo from "../../components/coursesInfoDirections/DirectionsCourses";
import SubmitApplication from "../../components/coursesInfoSubmit/SubmitApplication";

export default function CoursesInfoPage() {
    return (
        <div className={s.coursesDiv + " " + s.center}>           
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
    );
}
