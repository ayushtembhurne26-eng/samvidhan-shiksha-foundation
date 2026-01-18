import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../lib/api'
import { submitRequested, submitSucceeded, submitFailed } from '../slices/joinSlice'

function* submitJoin(action) {
  try {
    const payload = action.payload
    const { data } = yield call([api, api.post], '/api/users/register', payload)
    yield put(submitSucceeded(data))
  } catch (e) {
    const msg = e?.response?.data?.message || e.message
    yield put(submitFailed(msg))
  }
}

export default function* joinSaga() {
  yield takeLatest(submitRequested.type, submitJoin)
}
