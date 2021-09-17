import { fork, all } from 'redux-saga/effects'
import { watchAddressList } from './addressList';
import { watchAuthorizeUser } from './auth';
import { watchLogout } from './logout';
import { watchGetProfileData, watchProfileUpdate } from './profile';
import { watchRegisterUser } from './register';
import { watchRouteRequest } from './route';

export default function* rootSaga() {
    yield all([
        fork(watchAuthorizeUser),
        fork(watchRegisterUser),
        fork(watchProfileUpdate),
        fork(watchGetProfileData),
        fork(watchAddressList),
        fork(watchLogout),
        fork(watchRouteRequest),
    ]);
}