import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    userCourses: [],
}

const coursesSlice = createSlice({
    name: 'coursesReduces',
    initialState,

    reducers: {
        getAllCourses: (state, action) => {
            const { allCourses } = action.payload

            state.allCourses = allCourses
        },
        getUserCourse: (state, action) => {
            const { userCourse } = action.payload

            state.userCourses = userCourse
        },
    },
})

export const { getAllCourses, getUserCourse } = coursesSlice.actions

export default coursesSlice.reducer
