import { Alert } from 'react-native';

import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import constants from './constants';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `student/${id}`);

    yield put(signInSuccess(response.data));
  } catch (err) {
    err.response.data.errors.map(error =>
      Alert.alert('Falha na autenticação', error.msg),
    );
    yield put(signFailure());
  }
}

export default all([takeLatest(constants.authSignInRequest, signIn)]);
