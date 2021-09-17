import { createAction } from '@reduxjs/toolkit';

export const RouteActionTypes = {
    REQUEST_ROUTE: '[App] Request Route',
    REQUEST_ROUTE_SUCCESS: '[Api] Request Route Success',
    REQUEST_ROUTE_FAILURE: '[Api] Request Route Failure',
    CANCEL_REQUEST_ROUTE: '[App] Cancel Request Route',
};

export const requestRoute = createAction(RouteActionTypes.REQUEST_ROUTE);
export const requestRouteSuccess = createAction(RouteActionTypes.REQUEST_ROUTE_SUCCESS);
export const requestRouteFailure = createAction(RouteActionTypes.REQUEST_ROUTE_FAILURE);
export const cancelRequestRoute = createAction(RouteActionTypes.CANCEL_REQUEST_ROUTE);