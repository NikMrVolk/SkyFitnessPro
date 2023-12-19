import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    token: null,
    id: null,
  }

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser(state, action) {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.id = action.payload.id;
      },
      updateUser(state, action) {
        state.email = action.payload.email;
      },
      removeUser(state) {
        state.email = null;
        state.token = null;
        state.id = null;
      },
      setEmail(state, action) {
        state.email = action.payload.email;
        localStorage.setItem("email", state.email);
      },
  
      setPassword(state, action) {
        state.password = action.payload.password;
        localStorage.setItem("password", state.password);
      },
    },
  })
  
  export const { setUser, removeUser, updateUser, setEmail, setPassword} = userSlice.actions
  
  export default userSlice.reducer