import { handleActions } from 'redux-actions';
import { requestAddressList, requestAddressListFailure } from '../addressList';
import { authUserFailure, authUserRequest } from '../auth';
import { updateProfileFailure, updateProfile, requestProfile, requestProfileFailure } from '../profile';
import { registerUserFailure, registerUserRequest } from '../register';
import { requestRoute, requestRouteFailure } from '../route';
import { logoutSuccess } from '../logout';
import { resetErrorRequest } from './actions';

export const errorReducer = handleActions({
    [authUserRequest]: () => null,
    [authUserFailure]: (_, { payload }) => payload,
    [requestProfile]: () => null,
    [requestProfileFailure]: (_, { payload }) => payload,
    [updateProfile]: () => null,
    [updateProfileFailure]: (_, { payload }) => payload,
    [registerUserRequest]: () => null,
    [registerUserFailure]: (_, { payload }) => payload,
    [requestAddressList]: () => null,
    [requestAddressListFailure]: (_, { payload }) => payload,
    [requestRoute]: () => null,
    [requestRouteFailure]: (_, { payload }) => payload,
    [logoutSuccess]: () => null,
    [resetErrorRequest]: () => null,
}, {error: null});