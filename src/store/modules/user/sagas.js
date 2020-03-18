import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;
        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);

        toast.success('perfil atualizado com sucesso!');

        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        toast.error('erro ao atualizar perfil, Confira seus dados');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
