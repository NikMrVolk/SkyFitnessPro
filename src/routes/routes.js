import Auth from "../pages/Auth";
import Course from "../pages/Course";
import MainPage from "../pages/MainPage";

import {
    COURSE_ROUTE,
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
} from "../utils/constants";

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
];
