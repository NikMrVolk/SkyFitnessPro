import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './components/routes/AppRoutes'
import { useGetCoursesQuery } from './services/courses'
import { useEffect } from 'react'
import { setAllCourses, setWorkOut } from './store/slices/courses'

function App() {
    const dispatch = useDispatch()
    const { data } = useGetCoursesQuery()
    const { workOut, workOutType } = useSelector(
        (state) => state.courses,
    )

    useEffect(() => {
        if (data) {
            const allCoursesObject = {
                allCourses: Object.values(data).sort(
                    (a, b) => a.order - b.order,
                ),
            }

            dispatch(setAllCourses(allCoursesObject))

            if (workOut?.day) {
                const searchedWorkOut = allCoursesObject.allCourses
                    .find((el) => el.nameEN === workOutType.nameEN)
                    .workouts.find((el) => el.day.trim() === workOut.day.trim())

                dispatch(setWorkOut(searchedWorkOut))
            }
        }
    }, [data])

    return (
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                limit={1}
            />
        </>
    )
}

export default App
