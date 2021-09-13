import { handleActions } from 'redux-actions';
import { requestAddressList, requestAddressListFailure } from '../addressList';
import { authUserFailure, authUserRequest } from '../auth';
import { updateProfileFailure, updateProfile, requestProfile, requestProfileFailure } from '../profile';
import { registerUserFailure, registerUserRequest } from '../register';
import { requestRoute, requestRouteFailure } from '../route/actions';

export const errorReducer = handleActions({
    [authUserRequest]: () => null,
    [authUserFailure]: (_state, { payload }) => payload,
    [requestProfile]: () => null,
    [requestProfileFailure]: (_state, { payload }) => payload,
    [updateProfile]: () => null,
    [updateProfileFailure]: (_state, { payload }) => payload,
    [registerUserRequest]: () => null,
    [registerUserFailure]: (_state, { payload }) => payload,
    [requestAddressList]: () => null,
    [requestAddressListFailure]: (_state, { payload }) => payload,
    [requestRoute]: () => null,
    [requestRouteFailure]: (_state, { payload }) => payload,
}, {error: null});