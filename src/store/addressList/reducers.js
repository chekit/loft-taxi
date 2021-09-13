import { handleActions } from 'redux-actions';
import { requestAddressListFailure, requestAddressListSuccess } from './actions';

export const addressListReducer = handleActions({
    [requestAddressListSuccess]: (_state, { payload }) => payload,
    [requestAddressListFailure]: () => null,
}, { addressList: null })