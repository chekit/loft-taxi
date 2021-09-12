import { getProfileRequest, updateProfileRequest } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { ApiServiceBase } from '../../services';
import { getProfileFailure, getProfileSuccess, updateProfileFailure, updateProfileSuccess } from './actions';

const api = new ApiServiceBase();

async function getData(token) {
    const result = await api.get(`card?token=${token}`);
    return result;
}

async function updateData(data) {
    const result = await api.post(`card`, JSON.stringify(data));
    return result;

}

function* updateProfile(action) {
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
        yield put(getProfileFailure(e.message))
    }
}

function* getProfile(action) {
    try {
        const { success, error, ...data } = yield call(getData, action.payload);

        if (data) {
            yield put(getProfileSuccess(data));
        }

        if (!success && error) {
            yield put(getProfileFailure(error));
        }
    } catch (e) {
        yield put(getProfileFailure(e.message))
    }
}


export function* watchProfileUpdate() {
    yield takeLatest(updateProfileRequest, updateProfile);
}

export function* watchGetProfileData() {
    yield takeLatest(getProfileRequest, getProfile);
}