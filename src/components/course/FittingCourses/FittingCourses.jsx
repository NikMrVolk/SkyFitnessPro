import s from "./FittingCourses.module.css";

export default function FittingCoursesInfo() {
    return (
        <div>
            <h2 className={s.h2}>Подойдет для вас, если:</h2>
            <ul className={s.ul}>
                <div className={s.div}>
                    {/* <div className={s.number}>1</div> */}

                    <div className={s.numberDiv}>
                        <span className={s.numberSpan}>1</span>
                    </div>
                    <li className={s.li}>
                        Давно хотели попробовать йогу, но не решались начать
                    </li>
                </div>
                <div className={s.div}>
                <div className={s.numberDiv}>
                        <span className={s.numberSpan}>2</span>
                    </div>
                    <li className={s.li}>
                        Хотите укрепить позвоночник, избавиться от болей в спине
                        и суставах
                    </li>
                </div>

                <div className={s.div}>
                <div className={s.numberDiv}>
                        <span className={s.numberSpan}>3</span>
                    </div>
                    <li className={s.li}>
                        Ищете активность, полезную для тела и души
                    </li>
                </div>
            </ul>
        </div>
    );
}
