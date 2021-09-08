import React from 'react';
import PropTypes from 'prop-types';

import './PageWrapper.scss';

export const PAGE_WRAPPER_TEST_ID = 'page-wrapper';

export const PageWrapper = props => {
    const { children, isLoggedIn } = props;

    const mainContainerMod = isLoggedIn ? 'is-column' : '';

    return (
        <main className={mainContainerMod} data-testid={PAGE_WRAPPER_TEST_ID}>
            {children}
        </main>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    isLoggedIn: PropTypes.bool
};

export default PageWrapper;