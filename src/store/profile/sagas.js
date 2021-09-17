import { requestProfile, updateProfile } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { api } from '../../services';
import { requestProfileFailure, requestProfileSuccess, updateProfileFailure, updateProfileSuccess } from './actions';

async function getData(token) {
    const result = await api.get(`card?token=${token}`);
    return result;
}

async function updateData(data) {
    const result = await api.post(`card`, JSON.stringify(data));
    return result;

}

function* updateProfileData(action) {
    try {
        const { success, error } = yield call(updateData, action.payload);

        if (success) {
            const { cardNumber, expiryDate, cardName, cvc } = action.payload;
            yield put(updateProfileSuccess({ cardNumber, expiryDate, cardName, cvc }));
        }

        if (error) {
            yield put(updateProfileFailure(error));
        }
    } catch (e) {
        yield put(requestProfileFailure(e.message))
    }
}

export function* getProfile(action) {
    try {
        const { success, error, ...data } = yield call(getData, action.payload);

        if (data) {
            yield put(requestProfileSuccess(data));
        }

        if (!success && error) {
            yield put(requestProfileFailure(error));
        }
    } catch (e) {
        yield put(requestProfileFailure(e.message))
    }
}


export function* watchProfileUpdate() {
    yield takeLatest(updateProfile, updateProfileData);
}

export function* watchGetProfileData() {
    yield takeLatest(requestProfile, getProfile);
}