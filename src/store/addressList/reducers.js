import { handleActions } from 'redux-actions';
import { requestAddressListFailure, requestAddressListSuccess } from './actions';

export const addressListReducer = handleActions({
    [requestAddressListSuccess]: (_, { payload }) => payload,
    [requestAddressListFailure]: () => null,
}, { addressList: null })