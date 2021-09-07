import React, { Component } from 'react';
import { AuthContext } from './../contexts/AuthContext';

// @TODO: REMOVE!!!
function AuthHOC(WrappedComponent) {
    return class extends Component {
        static displayName = 'AuthHOC';
        static contextType = AuthContext;

        render() {
            return (
                <AuthContext.Consumer>{(context) => {
                    return <WrappedComponent authContext={context} {...this.props} />;
                }}</AuthContext.Consumer>
            )
        }
    }
}

export default AuthHOC;