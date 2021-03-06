import { api, LocalStorageService, StorageKeys } from '../../services';
import { authUserFailure, authUserRequest, authUserSuccess } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';

const localStorageService = new LocalStorageService();

async function login(data) {
    const result = await api.post('auth', JSON.stringify(data));
    return result;
}

export function* authorizeUser(action) {
    try {
        const { success, error, token } = yield call(login, action.payload);

        if (success) {
            localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
            yield put(authUserSuccess({ ...action.payload, token }));
        }

        if (error) {
            yield put(authUserFailure(error));
        }
    } catch (e) {
        yield put(authUserFailure(e.message));
    }
}

export function* watchAuthorizeUser() {
    yield takeLatest(authUserRequest, authorizeUser);
}