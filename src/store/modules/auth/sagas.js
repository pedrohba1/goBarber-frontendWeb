import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, SignFailure } from './actions';

export function* SignIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('usuário não é prestador de serviço');
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('falha na autenticação, verifique seus dados');
        yield put(SignFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
        history.push('/');
    } catch (err) {
        toast.error('falha no cadastro, verifique seus dados');
        yield put(SignFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
