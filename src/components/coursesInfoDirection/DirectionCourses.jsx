import styleTitle from "../coursesInfoFitting/FittingCourses.module.css";
import s from "./DirectionCourses.module.css";

export default function DirectionCoursesInfo() {
    return (
        <div>
            <h2 className={styleTitle.h2+" "+s.titlePadding}>Направления:</h2>
            <ul className={s.ul}>
                <li className={s.li}>Йога для новичков</li>
                <li className={s.li}>Классическая йога</li>
                <li className={s.li}>Йогатерапия</li>
                <li className={s.li}>Кундалини-йога</li>
                <li className={s.li}>Хатха-йога</li>
                <li className={s.li}>Аштанга-йога</li>
            </ul>
        </div>
    );
}
