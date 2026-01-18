import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import authReducer from './slices/authSlice'
import eventsReducer from './slices/eventsSlice'
import joinReducer from './slices/joinSlice'
import rootSaga from './rootSaga'

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    join: joinReducer,
  },
  middleware: (getDefault) => getDefault({ thunk: false }).concat(saga),
})

saga.run(rootSaga)

export default store
