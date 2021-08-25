import React, { Component } from 'react';

// @TODO: Add Portal to show loader
function LoadingHOC(WrappedComponent) {
    return class extends Component {
        static displayName = 'LoadingHOC';

        render() {
            const { loading } = this.props;

            return loading ? <p>Loading...</p> : <WrappedComponent {...this.props} />
        }
    }
}

export default LoadingHOC;