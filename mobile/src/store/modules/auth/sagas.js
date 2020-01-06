import { Alert } from 'react-native';

import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `students/${id}`);

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'ID não cadastrado');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
