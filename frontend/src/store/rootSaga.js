import { all, fork } from 'redux-saga/effects'
import authSaga from './sagas/authSaga'
import eventsSaga from './sagas/eventsSaga'
import joinSaga from './sagas/joinSaga'

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(eventsSaga),
    fork(joinSaga),
  ])
}
