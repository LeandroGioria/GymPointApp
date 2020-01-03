import constants from './constants';

export function signInRequest(id) {
  return {
    type: constants.authSignInRequest,
    payload: {
      id,
    },
  };
}

export function signInSuccess(student) {
  return {
    type: constants.authSignInSuccess,
    payload: {
      student,
    },
  };
}

export function signFailure() {
  return {
    type: constants.authSignFailure,
  };
}
