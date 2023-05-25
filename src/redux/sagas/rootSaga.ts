import { all, fork } from 'redux-saga/effects';
import watchingSaga from './postsSaga';

export default function* rootSaga() {
  yield all([fork(watchingSaga)]);
}
