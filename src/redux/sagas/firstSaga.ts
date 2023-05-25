import { takeEvery, put, call } from 'redux-saga/effects';
import { getPosts } from '../../api';
import { ReceivedPost } from '../../types';
import { FETCH_POSTS } from '../constants';
import { setPosts } from '../actions/actionsCreator';

export function* workerSaga() {
  const data: ReceivedPost[] = yield call(getPosts);
  yield put(setPosts(data));
}

export function* watchingSaga() {
  yield takeEvery(FETCH_POSTS, workerSaga);
}

export function* firstSaga() {
  yield watchingSaga();
}
