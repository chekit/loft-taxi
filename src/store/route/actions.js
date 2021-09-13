import { createAction } from '@reduxjs/toolkit';

export const RouteActionTypes = {
    REQUEST_ROUTE: '[App] Request Route',
    REQUEST_ROUTE_SUCCESS: '[Api] Request Route Success',
    REQUEST_ROUTE_FAILURE: '[Api] Request Route Failure',
};

export const requestRoute = createAction(RouteActionTypes.REQUEST_ROUTE);
export const requestRouteSuccess = createAction(RouteActionTypes.REQUEST_ROUTE_SUCCESS);
export const requestRouteFailure = createAction(RouteActionTypes.REQUEST_ROUTE_FAILURE);