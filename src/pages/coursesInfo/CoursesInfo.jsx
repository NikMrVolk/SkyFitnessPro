import s from "./CoursesInfo.module.css";
import HeaderCoursesInfo from "../../components/coursesInfoHeader/HeaderCourses";
import FittingCoursesInfo from "../../components/coursesInfoFitting/FittingCourses";

export default function CoursesInfoPage() {
    return (
        <div className={s.coursesDiv + " " + s.center}>
            <HeaderCoursesInfo />
            <FittingCoursesInfo />
        </div>
    );
}
