import { ForkEffect, put, call, all, takeLatest, AllEffect } from 'redux-saga/effects';
import { getPosts } from '../../api';
import { ReceivedPost } from '../../types';
import { FETCH_POSTS } from '../constants';
import { setPosts } from '../actions/actionsCreator';

function* workerSaga() {
  const data: ReceivedPost[] = yield call(getPosts);
  yield put(setPosts(data));
}

function* watchingSaga() {
  yield all([takeLatest(FETCH_POSTS, workerSaga)]);
}

export default watchingSaga;
