import produce from 'immer';

import constants from './constants';

const INITIAL_STATE = {
  student: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.authSignInRequest:
      return produce(state, draft => {
        draft.loading = true;
      });
    case constants.authSignInSuccess:
      return produce(state, draft => {
        draft.student = action.payload.student;
        draft.signed = true;
        draft.loading = false;
      });
    case constants.authSignFailure:
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
