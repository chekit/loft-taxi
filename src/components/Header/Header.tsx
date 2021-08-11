import React from 'react';
import { AppPages, NavigationBaseProps } from '../../common/models';
import Logo from '../Logo';

import Navigation from '../Navigation';
import './Header.scss';

interface HeaderProps extends NavigationBaseProps { }

export const Header = ({ navigate, currentPage }: HeaderProps) => (
    <header className={`header ${currentPage === AppPages.LOGIN ? 'is-vertical' : ''}`}>
        <Logo currentPage={currentPage} />
        {currentPage !== AppPages.LOGIN && <Navigation navigate={navigate} currentPage={currentPage} />}
    </header>
);