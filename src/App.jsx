import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './components/routes/AppRoutes'
import { useGetCoursesQuery } from './services/courses'
import { useEffect } from 'react'
import { setAllCourses } from './store/slices/courses'

function App() {
    const dispatch = useDispatch()
    const { data } = useGetCoursesQuery()

    useEffect(() => {
        if (data) {
            dispatch(
                setAllCourses({
                    allCourses: Object.values(data).sort(
                        (a, b) => a.order - b.order,
                    ),
                }),
            )
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
