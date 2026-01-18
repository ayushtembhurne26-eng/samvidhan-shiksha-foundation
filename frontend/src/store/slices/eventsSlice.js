import { createSlice } from '@reduxjs/toolkit'

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchRequested(state) {
      state.loading = true
      state.error = null
    },
    fetchSucceeded(state, action) {
      state.loading = false
      state.items = action.payload
    },
    fetchFailed(state, action) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchRequested, fetchSucceeded, fetchFailed } = eventsSlice.actions
export default eventsSlice.reducer
