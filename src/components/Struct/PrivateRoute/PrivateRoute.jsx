import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const PrivateRoute = props => {
    const { component: RouteComponent, path, redirectPath, isLoggedIn } = props;

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
    redirectPath: PropTypes.string,
    isLoggedIn: PropTypes.bool
};

PrivateRoute.defaultProps = {
    path: '/',
    redirectPath: '/',
    isLoggedIn: false
};

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);