import { createAction } from '@reduxjs/toolkit';

export const addressListActionTypes = {
    REQUEST_ADDRESS_LIST: '[App] Request Address List',
    REQUEST_ADDRESS_LIST_SUCCESS: '[Api] Request Address List Success',
    REQUEST_ADDRESS_LIST_FAILURE: '[Api] Request Address List Failure',
};

export const requestAddressList = createAction(addressListActionTypes.REQUEST_ADDRESS_LIST);
export const requestAddressListSuccess = createAction(addressListActionTypes.REQUEST_ADDRESS_LIST_SUCCESS);
export const requestAddressListFailure = createAction(addressListActionTypes.REQUEST_ADDRESS_LIST_FAILURE);