import { Auth } from '../pages/Auth'
import MainPage from '../pages/MainPage'
import CoursesInfoPage from '../pages/CoursesInfo'
import Profile from '../pages/Profile'

import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    PROFILE_ROUTE,
    COURSE_ROUTE,
} from '../utils/constants'

export const publicRoutes = [
    {
        element: <Auth />,
        path: LOGIN_ROUTE,
    },
    {
        element: <Auth />,
        path: REGISTRATION_ROUTE,
    },
    {
        element: <MainPage />,
        path: MAIN_ROUTE,
    },
    {
        element: <CoursesInfoPage />,
        path: COURSE_ROUTE,
    },
]

export const privateRoutes = [
    {
        element: <Profile />,
        path: PROFILE_ROUTE,
    },
]
