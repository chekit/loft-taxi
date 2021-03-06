import { takeLatest, put, call } from 'redux-saga/effects';
import { registerUserFailure, registerUserRequest, registerUserSuccess } from '.';
import { api, LocalStorageService, StorageKeys } from '../../services';

const localStorageService = new LocalStorageService();

async function register(data) {
    const result = await api.post('register', JSON.stringify(data));
    return result;
}

function* registerUser(action) {
    try {
        const { success, error, token } = yield call(register, action.payload);

        if (success) {
            localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
            yield put(registerUserSuccess({ ...action.payload, token }));
        }

        if (error) {
            yield put(registerUserFailure(error));
        }
    } catch (e) {
        yield put(registerUserFailure(e.message))
    }
}

export function* watchRegisterUser() {
    yield takeLatest(registerUserRequest, registerUser);
}
