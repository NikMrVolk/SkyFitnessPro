import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
}

const coursesSlice = createSlice({
    name: 'coursesReduces',
    initialState,

    reducers: {
        getAllCourses: (state, action) => {
            const { allCourses } = action.payload
            
            state.allCourses = allCourses
        },
    },
})

export const { getAllCourses } = coursesSlice.actions

export default coursesSlice.reducer
