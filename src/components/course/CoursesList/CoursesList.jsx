import s from './CoursesList.module.css'

function CoursesList({ courses, mainPage }) {
    return (
        <div className={s.courses}>
            {mainPage
                ? courses.map((el) => (
                      <div className={s.course} key={el.id}>
                          <span className={s.courseName}>{el.name}</span>
                          <img
                              className={s.courseImg}
                              src={el.img}
                              alt={el.alt}
                          />
                      </div>
                  ))
                : courses.map((el) => (
                      <div className={s.course} key={el.id}>
                          <span className={s.courseName}>{el.name}</span>
                          <img
                              className={s.courseImg}
                              src={el.img}
                              alt={el.alt}
                          />
                          <button className={s.courseBtn}>Перейти →</button>
                      </div>
                  ))}
        </div>
    )
}

export default CoursesList
