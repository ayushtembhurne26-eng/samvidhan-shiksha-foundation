import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../lib/api'
import { loginRequested, loginSucceeded, loginFailed, logout } from '../slices/authSlice'

function* loginWorker(action) {
  try {
    const { mobile, password } = action.payload
    const { data } = yield call([api, api.post], '/api/auth/login', { mobile, password })
    localStorage.setItem('token', data.token)
    yield put(loginSucceeded(data.token))
  } catch (e) {
    const msg = e?.response?.data?.message || e.message
    yield put(loginFailed(msg))
  }
}

function* logoutWorker() {
  localStorage.removeItem('token')
}

export default function* authSaga() {
  yield takeLatest(loginRequested.type, loginWorker)
  yield takeLatest(logout.type, logoutWorker)
}
