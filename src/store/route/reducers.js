import { handleActions } from 'redux-actions';
import { cancelRequestRoute, requestRouteFailure, requestRouteSuccess } from './actions';

export const routeReducer = handleActions({
    [requestRouteSuccess]: (_, { payload }) => payload,
    [requestRouteFailure]: () => [],
    [cancelRequestRoute]: () => [],
}, { currentRoute: [] })