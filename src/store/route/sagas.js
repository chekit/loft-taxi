import { takeLatest, put, call } from 'redux-saga/effects';
import { api } from '../../services';
import { requestRoute, requestRouteFailure, requestRouteSuccess } from './actions';

async function fetchData({ address1, address2 }) {
    const result = await api.get(`route?address1=${address1}&address2=${address2}`);
    return Array.isArray(result) ? { route: result } : result;
}

function* getRoute(action) {
    try {
        const { route, error } = yield call(fetchData, action.payload);

        if (route) {
            yield put(requestRouteSuccess(route))
        }

        if (error) {
            yield put(requestRouteFailure(error));
        }
    } catch (e) {
        yield put(requestRouteFailure(e.message));
    }
}

export function* watchRouteRequest() {
    yield takeLatest(requestRoute, getRoute);
}