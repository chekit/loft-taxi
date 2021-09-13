import { takeLatest, put, call } from 'redux-saga/effects';
import { requestAddressList, requestAddressListFailure, requestAddressListSuccess } from './actions';
import { ApiServiceBase } from '../../services';

const api = new ApiServiceBase();

async function fetchData() {
    const result = await api.get('addressList');
    return result;
}

function* getAddressList() {
    try {
        const { addresses, error } = yield call(fetchData);

        if (addresses) {
            yield put(requestAddressListSuccess(addresses));
        }

        if (error) {
            yield put(requestAddressListFailure(error));
        }
    } catch (e) {
        yield put(requestAddressListFailure(e.message));
    }
}

export function* watchAddressList() {
    yield takeLatest(requestAddressList, getAddressList);
}