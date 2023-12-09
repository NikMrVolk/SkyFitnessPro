import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,

    reducers: {
        logIn: (state) => {
            state.isAuth = true
        },
        logOut: (state) => {
            state.isAuth = false
        },
    },
})

export const { logIn, logOut } = profileSlice.actions

export default profileSlice.reducer
