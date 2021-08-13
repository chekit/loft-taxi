import React from 'react';

import { AppPages } from '../../common/models';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';

export const Header = ({ navigate, currentPage }) => {
    const showNavigation = currentPage !== AppPages.LOGIN && currentPage !== AppPages.REGISTRATION;
    return (
        <header className={`header ${!showNavigation ? 'is-vertical' : ''}`}>
            <Logo currentPage={currentPage} />
            {showNavigation && <Navigation navigate={navigate} currentPage={currentPage} />}
        </header>
    );
};