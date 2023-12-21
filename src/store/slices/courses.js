import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCourses: [],
    userCourses: [],
    workOut: {},
    workOutType: {},
    userQuantityExercises: [],
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
        },
        setUserQuantityExercises: (state) => {
            const auth = JSON.parse(localStorage.getItem('auth'))
            if (state.workOut) {
                state.userQuantityExercises = state.workOut?.exercises?.map(
                    (exercise) => {
                        const user = exercise.users.find(
                            (user) => user.userID === auth.userID,
                        )
                        return user ? user.quantityUser : 0
                    },
                )
            }
        },
    },
})

export const { setAllCourses, setUserCourse, setWorkOut, setWorkOutType } =
    coursesSlice.actions

export default coursesSlice.reducer
