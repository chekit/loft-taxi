import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/AuthContext';

import './PageWrapper.scss';

export const PageWrapper = ({ children }) => {
    return (
        <AuthContext.Consumer>{(context) => {
            const mainContainerMod = !context.isLoggedIn ? 'is-row' : '';
            return (
                <main className={mainContainerMod}>
                    {children}
                </main>
            );
        }}</AuthContext.Consumer>
    );
};


PageWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};