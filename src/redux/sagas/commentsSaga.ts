import { put, call, takeLatest } from 'redux-saga/effects';
import { getComments } from '../../api';
import { ReceivedComments } from '../../types';
import { FETCH_COMMENTS, SET_COMMENTS_ERROR } from '../constants';
import { setComments, setCommentsRequest } from '../actions/actionsCreator';

function* handleComments(action: { type: string; idPost: number }) {
  try {
    yield put(setCommentsRequest());
    const data: ReceivedComments[] = yield call(getComments, action.idPost);
    yield put(setComments(data));
  } catch {
    yield put({ type: SET_COMMENTS_ERROR, payload: 'Error fetching comments news' });
  }
}

function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS, handleComments);
}

export default commentsSaga;
