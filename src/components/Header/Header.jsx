import React from 'react';

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