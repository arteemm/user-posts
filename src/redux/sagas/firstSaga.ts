import { takeEvery } from 'redux-saga/effects';
import { getPosts } from '../../api';
import { ReceivedPost } from '../../types';
import { FETCH_POSTS } from '../constants';

export function* workerSaga() {
  const data: ReceivedPost = yield getPosts();
  console.log(data);
}

export function* watchingSaga() {
  yield takeEvery(FETCH_POSTS, workerSaga);
}

export function* firstSaga() {
  yield watchingSaga();
}
