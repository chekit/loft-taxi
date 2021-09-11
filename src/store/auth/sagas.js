import { LocalStorageService, StorageKeys } from '../../services';
import { authUserFailure, authUserRequest, authUserSuccess } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { BASE_API_URL } from '../../common/constants';

const localStorageService = new LocalStorageService();

async function login(data) {
    const response = await fetch(`${BASE_API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    return result;
}

function* authorizeUser(action) {
    try {
        const { success, error } = yield call(login, action.payload);

        if (success) {
            localStorageService.save(StorageKeys.LOGIN_DATA, { email: action.payload.email, password: action.payload.password });
            yield put(authUserSuccess(action.payload));
        }

        if (error) {
            yield put(authUserFailure(error));
        }
    } catch (e) {
        yield put(authUserFailure(e.message));
    }
}

function* watchAuthorizeUser() {
    yield takeLatest(authUserRequest, authorizeUser);
}

export default watchAuthorizeUser;