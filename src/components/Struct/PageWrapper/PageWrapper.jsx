import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PageWrapper.scss';
import { connect } from 'react-redux';

export const PAGE_WRAPPER_TEST_ID = 'page-wrapper';

export const PageWrapper = ({ children, isLoggedIn }) => {
    return (
        <main className={classNames({ 'is-column': isLoggedIn })} data-testid={PAGE_WRAPPER_TEST_ID}>
            {children}
        </main>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(PageWrapper);
