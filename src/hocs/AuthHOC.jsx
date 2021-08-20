import React, { Component } from 'react';
import { AuthContext } from './../contexts/AuthContext';

function AuthHOC(WrappedComponent) {
    return class extends Component {
        static displayName = 'AuthHOC';

        render() {
            return (
                <AuthContext.Consumer>{(context) => {
                    return <WrappedComponent authContext={context} />;
                }}</AuthContext.Consumer>
            )
        }
    }
}

export default AuthHOC;