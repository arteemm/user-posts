import { SET_POSTS_ERROR } from '../constants';

type Errors = {
  postsError: string;
};

interface ErrorsAction {
  type: string;
  payload: string;
}

const initialState: Errors = {
  postsError: '',
};

const errors = (state = initialState, { type, payload }: ErrorsAction) => {
  switch (type) {
    case SET_POSTS_ERROR:
      return {
        ...state,
        postsError: payload,
      };
    default:
      return state;
  }
};

export default errors;
