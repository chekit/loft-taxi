import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export const PrivateRoute = ({ component: RouteComponent, path, redirectPath }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return <Route
        path={path}
        render={routeProps => {
            return isLoggedIn
                ? <RouteComponent {...routeProps} />
                : <Redirect to={redirectPath} />
        }}
    />;
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType,
    path: PropTypes.string,
    redirectPath: PropTypes.string
};

PrivateRoute.defaultProps = {
    path: '/',
    redirectPath: '/'
};