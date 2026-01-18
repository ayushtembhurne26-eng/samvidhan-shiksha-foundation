import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../lib/api'
import { fetchRequested, fetchSucceeded, fetchFailed } from '../slices/eventsSlice'

function* fetchEvents() {
  try {
    const { data } = yield call([api, api.get], '/api/events')
    yield put(fetchSucceeded(data))
  } catch (e) {
    const msg = e?.response?.data?.message || e.message
    yield put(fetchFailed(msg))
  }
}

export default function* eventsSaga() {
  yield takeLatest(fetchRequested.type, fetchEvents)
}
