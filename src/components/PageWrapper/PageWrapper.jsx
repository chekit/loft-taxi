import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/AuthContext';

import './PageWrapper.scss';

export const PageWrapper = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const mainContainerMod = !isLoggedIn ? 'is-row' : '';

    return (
        <main className={mainContainerMod}>
            {children}
        </main>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};