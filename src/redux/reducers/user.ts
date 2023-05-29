import { SET_USER, SET_USER_REQUEST, SET_USER_ERROR } from '../constants';
import { UserAction, User, ReceivedUser } from '../../types';

const initialState: User = {
  pending: false,
  user: {} as ReceivedUser,
  error: null,
};

const setUser = (state = initialState, action: UserAction): User => {
  switch (action.type) {
    case SET_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SET_USER:
      return {
        ...state,
        pending: false,
        user: action.payload,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        pending: false,
        user: {} as ReceivedUser,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default setUser;
