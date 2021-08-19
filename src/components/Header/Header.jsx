import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = ({ navigate, currentPage }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <header className={`header ${!isLoggedIn && 'is-vertical'}`}>
            <Logo currentPage={currentPage} />
            {isLoggedIn && <Navigation navigate={navigate} currentPage={currentPage} />}
        </header>
    );
};

Header.propTypes = {
    navigate: PropTypes.func,
    currentPage: PropTypes.number,
    isLoggedIn: PropTypes.bool
};