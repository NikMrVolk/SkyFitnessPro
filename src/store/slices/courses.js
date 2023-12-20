import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    userCourses: [],
    workOut: {},
    workOutType: {},
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
        setWorkOut: (state, action) => {
            state.workOut = action.payload
        },
        setWorkOutType: (state, action) => {
            state.workOutType = action.payload
        }
    },
})

export const { setAllCourses, setUserCourse, setWorkOut, setWorkOutType } = coursesSlice.actions

export default coursesSlice.reducer
