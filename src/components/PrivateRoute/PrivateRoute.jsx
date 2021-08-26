import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const PrivateRoute = ({ children, path, redirectPath }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return <Route
        path={path}
        render={() => {
            return isLoggedIn
                ? (children)
                : <Redirect to={redirectPath} />
        }}
    />;
};

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    path: PropTypes.string,
    redirectPath: PropTypes.string
};

PrivateRoute.defaultProps = {
    path: '/',
    redirectPath: '/'
};