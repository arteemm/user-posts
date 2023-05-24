import { all, fork } from 'redux-saga/effects';
import { firstSaga } from './firstSaga';

export default function* rootSaga() {
  yield all([fork(firstSaga)]);
}
