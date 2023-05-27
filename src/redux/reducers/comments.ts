import { SET_COMMENTS, SET_COMMENTS_ERROR, SET_COMMENTS_REQUEST } from '../constants';
import { CommentsAction, Comments, ReceivedCommentsList } from '../../types';

const initialState: Comments = {
  pending: false,
  comments: {} as ReceivedCommentsList,
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
        comments: Object.assign(state.comments, { [action.payload[0].postId]: action.payload }),
      };
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        pending: false,
        comments: {} as ReceivedCommentsList,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default setComments;
