import { SET_COMMENTS, SET_COMMENTS_ERROR, SET_COMMENTS_REQUEST } from '../constants';
import { ReceivedComments, CommentsAction, Comments } from '../../types';

const initialState: Comments = {
  pending: false,
  comments: [] as ReceivedComments[],
  error: null,
};

const setComments = (state = initialState, action: CommentsAction): Comments => {
  switch (action.type) {
    case SET_COMMENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SET_COMMENTS:
      return {
        ...state,
        pending: false,
        comments: action.payload,
      };
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        pending: false,
        comments: [] as ReceivedComments[],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default setComments;
