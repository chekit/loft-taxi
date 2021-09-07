import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';

export const HEADER_TEST_ID = 'header';

export const Header = props => {
    const { isLoggedIn } = props;

    return (
        <header className={`header ${isLoggedIn ? '' : 'is-not-auth'}`} data-testid={HEADER_TEST_ID}>
            <Logo isLoggedIn={isLoggedIn} />
            {isLoggedIn && <Navigation />}
        </header>
    );
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool
};