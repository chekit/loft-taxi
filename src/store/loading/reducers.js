import { handleActions } from 'redux-actions';
import { requestAddressList, requestAddressListFailure, requestAddressListSuccess } from '../addressList';
import { authUserFailure, authUserRequest, authUserSuccess } from '../auth';
import { logoutSuccess } from '../logout';
import { updateProfileFailure, updateProfile, updateProfileSuccess, requestProfile, requestProfileSuccess, requestProfileFailure } from '../profile';
import { registerUserFailure, registerUserRequest, registerUserSuccess } from '../register';
import { requestRoute, requestRouteFailure, requestRouteSuccess, cancelRequestRoute } from '../route';

export const isLoadingReducer = handleActions({
    [authUserRequest]: () => true,
    [authUserSuccess]: () => false,
    [authUserFailure]: () => false,
    [registerUserRequest]: () => true,
    [registerUserSuccess]: () => false,
    [registerUserFailure]: () => false,
    [requestProfile]: () => true,
    [requestProfileSuccess]: () => false,
    [requestProfileFailure]: () => false,
    [updateProfile]: () => true,
    [updateProfileSuccess]: () => false,
    [updateProfileFailure]: () => false,
    [requestAddressList]: () => true,
    [requestAddressListSuccess]: () => false,
    [requestAddressListFailure]: () => false,
    [requestRoute]: () => true,
    [requestRouteSuccess]: () => false,
    [requestRouteFailure]: () => false,
    [cancelRequestRoute]: () => false,
    [logoutSuccess]: () => false,
}, { isLoading: false });