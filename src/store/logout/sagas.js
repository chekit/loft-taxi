import { takeLatest, put } from 'redux-saga/effects';
import { LocalStorageService, StorageKeys } from '../../services';
import { logoutRequest, logoutSuccess } from './actions';

function* logoutUser() {
    const localStorageService = new LocalStorageService();

    localStorageService.delete(StorageKeys.LOGIN_DATA);
    yield put(logoutSuccess())
}

export function* watchLogout() {
    yield takeLatest(logoutRequest, logoutUser);
}