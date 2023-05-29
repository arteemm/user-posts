import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getUser } from '../../api';
import { ReceivedUser } from '../../types';
import { FETCH_USER, SET_USER_ERROR } from '../constants';
import { setUser, setUserRequest } from '../actions/actionsCreator';

function* handleUser(action: { type: string; userId: number }) {
  try {
    yield put(setUserRequest());
    yield delay(500);
    const data: ReceivedUser = yield call(getUser, action.userId);
    yield put(setUser(data));
  } catch {
    yield put({ type: SET_USER_ERROR, payload: 'Error fetching user' });
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USER, handleUser);
}

export default userSaga;
