import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/AuthContext';

import './PageWrapper.scss';

export const PAGE_WRAPPER_TEST_ID = 'page-wrapper';

export const PageWrapper = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    const mainContainerMod = !isLoggedIn ? 'is-row' : '';

    return (
        <main className={mainContainerMod} data-testid={PAGE_WRAPPER_TEST_ID}>
            {children}
        </main>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};