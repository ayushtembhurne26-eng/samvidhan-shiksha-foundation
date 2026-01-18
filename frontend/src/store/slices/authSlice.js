import { createSlice } from '@reduxjs/toolkit'

const tokenInit = typeof window !== 'undefined' ? localStorage.getItem('token') : null

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: tokenInit,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequested(state) {
      state.loading = true
      state.error = null
    },
    loginSucceeded(state, action) {
      state.loading = false
      state.token = action.payload
    },
    loginFailed(state, action) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.token = null
      state.error = null
      state.loading = false
    },
  },
})

export const { loginRequested, loginSucceeded, loginFailed, logout } = authSlice.actions
export default authSlice.reducer
