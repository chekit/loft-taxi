import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const HEADER_TEST_ID = 'header';

export const Header = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <header className={`header ${!isLoggedIn && 'is-vertical'}`} data-testid={HEADER_TEST_ID}>
            <Logo isLoggedIn={isLoggedIn} />
            {isLoggedIn && <Navigation />}
        </header>
    );
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool
};