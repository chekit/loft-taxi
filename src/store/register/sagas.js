import { takeLatest, put, call } from 'redux-saga/effects';
import { registerUserFailure, registerUserRequest, registerUserSuccess } from '.';
import { BASE_API_URL } from '../../common/constants';
import { LocalStorageService, StorageKeys } from '../../services';

const localStorageService = new LocalStorageService();

async function register(data) {
    const response = await fetch(`${BASE_API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    return result;
}

function* registerUser(action) {
    try {
        const { success, error } = yield call(register, action.payload);

        if (success) {
            localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
            yield put(registerUserSuccess(action.payload));
        }

        if (error) {
            yield put(registerUserFailure(error));
        }
    } catch (e) {
        yield put(registerUserFailure(e.message))
    }
}

function* watchRegisterUser() {
    yield takeLatest(registerUserRequest, registerUser);
}

export default watchRegisterUser;