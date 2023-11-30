import s from "./CoursesInfo.module.css";
import HeaderCoursesInfo from "../../components/coursesInfoHeader/HeaderCourses";
import FittingCoursesInfo from "../../components/coursesInfoFitting/FittingCourses";
import DirectionCoursesInfo from "../../components/coursesInfoDirection/DirectionCourses";

export default function CoursesInfoPage() {
    return (
        <div className={s.coursesDiv + " " + s.center}>
            <HeaderCoursesInfo />
            <FittingCoursesInfo />
            <DirectionCoursesInfo />
        </div>
    );
}
