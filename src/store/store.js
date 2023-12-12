import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/profileSlice'
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer: {
        profile: profileSlice,
        auth: authSlice,
    },
})

export default store
