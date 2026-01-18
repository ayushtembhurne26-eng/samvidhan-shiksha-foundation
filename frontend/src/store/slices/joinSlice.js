import { createSlice } from '@reduxjs/toolkit'

const joinSlice = createSlice({
  name: 'join',
  initialState: {
    loading: false,
    error: null,
    success: false,
    user: null,
  },
  reducers: {
    submitRequested(state) {
      state.loading = true
      state.error = null
      state.success = false
      state.user = null
    },
    submitSucceeded(state, action) {
      state.loading = false
      state.success = true
      state.user = action.payload
    },
    submitFailed(state, action) {
      state.loading = false
      state.error = action.payload
    },
    resetStatus(state) {
      state.loading = false
      state.error = null
      state.success = false
      state.user = null
    }
  }
})

export const { submitRequested, submitSucceeded, submitFailed, resetStatus } = joinSlice.actions
export default joinSlice.reducer
