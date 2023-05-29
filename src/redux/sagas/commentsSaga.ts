import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getComments } from '../../api';
import { ReceivedComment } from '../../types';
import { FETCH_COMMENTS, SET_COMMENTS_ERROR } from '../constants';
import { setComments, setCommentsRequest } from '../actions/actionsCreator';

function* handleComments(action: { type: string; idPost: number }) {
  try {
    yield put(setCommentsRequest());
    yield delay(500);
    const data: ReceivedComment[] = yield call(getComments, action.idPost);
    yield put(setComments(data));
  } catch {
    yield put({ type: SET_COMMENTS_ERROR, payload: 'Error fetching comments news' });
  }
}

function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS, handleComments);
}

export default commentsSaga;
