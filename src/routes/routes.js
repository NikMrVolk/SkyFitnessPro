import Auth from '../pages/Auth/Auth'
import MainPage from '../pages/MainPage/MainPage'
import Profile from '../pages/Profile/Profile'
import Course from '../pages/Course/Course'
import WorkOut from '../pages/WorkOut/WorkOut'

import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    PROFILE_ROUTE,
    COURSE_ROUTE,
    WORKOUT_ROUTE,
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
        element: <Course />,
        path: COURSE_ROUTE,
    },
]

export const privateRoutes = [
    {
        element: <Profile />,
        path: PROFILE_ROUTE,
    },
    {
        element: <WorkOut />,
        path: WORKOUT_ROUTE,
    },
]
