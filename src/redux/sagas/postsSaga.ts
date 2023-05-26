import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getPosts } from '../../api';
import { ReceivedPost } from '../../types';
import { FETCH_POSTS, SET_POSTS_ERROR } from '../constants';
import { setPosts, setPostsRequest } from '../actions/actionsCreator';

function* handlePosts() {
  try {
    yield put(setPostsRequest());
    yield delay(500);
    const data: ReceivedPost[] = yield call(getPosts);
    yield put(setPosts(data));
  } catch {
    yield put({ type: SET_POSTS_ERROR, payload: 'Error fetching post news' });
  }
}

function* watchingSaga() {
  yield takeLatest(FETCH_POSTS, handlePosts);
}

export default watchingSaga;
