import React from 'react';

import { AppPages } from '../../common/models/app-pages.enum';
import Navigation from '../Navigation';

interface HeaderProps {
    navigate: (nextPage: AppPages) => void;
}

export const Header = ({ navigate }: HeaderProps) => (
    <Navigation navigate={navigate} />
);