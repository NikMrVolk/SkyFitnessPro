import s from "./UserCourses.module.css";

function UserCourses() {
    return (
        <div className={s.courses}>
            <div className={s.course}>
                <span className={s.courseName}>Йога</span>
                <img className={s.courseImg} src="../img/yoga.svg" alt="yoga" />
                <button className={s.courseBtn}>Перейти →</button>
            </div>
            <div className={s.course}>
                <span className={s.courseName}>Стретчинг</span>
                <img
                    className={s.courseImg}
                    src="../img/stretching.svg"
                    alt="stretching"
                />
                <button className={s.courseBtn}>Перейти →</button>
            </div>
            <div className={s.course}>
                <span className={s.courseName}>Бодифлекс</span>
                <img
                    className={s.courseImg}
                    src="../img/bodyflex.svg"
                    alt="bodyflex"
                />
                <button className={s.courseBtn}>Перейти →</button>
            </div>
        </div>
    );
}

export default UserCourses;
