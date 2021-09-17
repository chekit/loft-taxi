import { handleActions } from 'redux-actions';
import { logoutSuccess } from '../logout';
import { cancelRequestRoute, requestRouteFailure, requestRouteSuccess } from './actions';

export const routeReducer = handleActions({
    [requestRouteSuccess]: (_, { payload }) => payload,
    [requestRouteFailure]: () => [],
    [cancelRequestRoute]: () => [],
    [logoutSuccess]: () => [],
}, { currentRoute: [] })