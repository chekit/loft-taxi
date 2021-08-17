import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';

export const Header = ({ navigate, currentPage, showNavigation }) => {
    return (
        <header className={`header ${!showNavigation ? 'is-vertical' : ''}`}>
            <Logo currentPage={currentPage} />
            {showNavigation && <Navigation navigate={navigate} currentPage={currentPage} />}
        </header>
    );
};

Header.propTypes = {
    navigate: PropTypes.func,
    currentPage: PropTypes.number,
    showNavigation: PropTypes.bool
};