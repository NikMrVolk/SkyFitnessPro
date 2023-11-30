import s from "./CoursesInfo.module.css";
import HeaderCoursesInfo from "../../components/headerCoursesInfo/HeaderCourses";

export default function CoursesInfoPage() {
    return (
        <div className={s.coursesDiv + " " + s.center}>
            <HeaderCoursesInfo />
        </div>
    );
}
