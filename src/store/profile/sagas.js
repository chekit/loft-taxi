import { updateProfileRequest } from './actions';
import { takeLatest, put, call } from 'redux-saga/effects';

function* updateProfile(action) {

}

function* watchProfile() {
    yield takeLatest(updateProfileRequest, updateProfile);
}

export default watchProfile;