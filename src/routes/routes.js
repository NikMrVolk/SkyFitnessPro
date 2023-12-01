import Auth from "../pages/Auth";
import MainPage from "../pages/MainPage";
import CoursesInfoPage from "../pages/coursesInfo/CoursesInfo";

import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    COURSES_INFO_ROUTE,
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
        element: <CoursesInfoPage />,
        path: COURSES_INFO_ROUTE,
    },
];
