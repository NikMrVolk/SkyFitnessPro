import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    userCourses: [],
}

const coursesSlice = createSlice({
    name: 'coursesReduces',
    initialState,

    reducers: {
        setAllCourses: (state, action) => {
            const { allCourses } = action.payload

            state.allCourses = allCourses
        },
        setUserCourse: (state, action) => {
            const { userCourse } = action.payload

            state.userCourses = userCourse
        },
    },
})

export const { setAllCourses, setUserCourse } = coursesSlice.actions

export default coursesSlice.reducer
