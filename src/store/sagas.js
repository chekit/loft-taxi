// import { fork, call, select } from 'redux-saga/effects'
// import { LocalStorageService, StorageKeys } from '../services';
// import { authorizeUser } from './auth';
// import { getProfile } from './profile/sagas';

// const localStorageService = new LocalStorageService();

// function* fetchAll() {
//     const storedUserData = localStorageService.fetch(StorageKeys.LOGIN_DATA);

//     if (storedUserData) {
//         const task1 = yield fork(authorizeUser, { payload: storedUserData});
//         const { token } = yield select();
//         if (token) {
//             const task2 = yield fork(getProfile, { payload: token });
//         }
//     }

// }

// export function* main() {
//     yield call(fetchAll);
// }