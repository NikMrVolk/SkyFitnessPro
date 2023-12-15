import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/profileSlice'
import authSlice from './slices/authSlice'
import coursesSlice from './slices/courses'
import { coursesQuery } from '../services/courses'

const store = configureStore({
    reducer: {
        profile: profileSlice,
        auth: authSlice,
        courses: coursesSlice,
        [coursesQuery.reducerPath]: coursesQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coursesQuery.middleware),
})

export default store
