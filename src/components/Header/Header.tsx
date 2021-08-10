import React from 'react';
import { NavigationBaseProps } from '../../common/models';

import Navigation from '../Navigation';

interface HeaderProps extends NavigationBaseProps { }

export const Header = ({ navigate, currentPage }: HeaderProps) => (
    <Navigation navigate={navigate} currentPage={currentPage} />
);