import React from 'react';
import { AppPages } from '../../common/models';
import NavigationLink from './NavigationLink';

import './Navigation.scss';

// @TODO: Add logic for mobile devices
export const Navigation = ({ navigate, currentPage }) => {
    return (
        <nav className="navigation">
            <ul class="navigation-list">
                <li className="navigation-list__item">
                    <NavigationLink title="Карта" onClickHandler={() => navigate(AppPages.MAP)} isActive={currentPage === AppPages.MAP}></NavigationLink>
                </li>
                <li className="navigation-list__item">
                    <NavigationLink title="Профиль" onClickHandler={() => navigate(AppPages.PROFILE)} isActive={currentPage === AppPages.PROFILE}></NavigationLink>
                </li>
                {currentPage !== AppPages.LOGIN && (
                    <li className="navigation-list__item">
                        <NavigationLink title="Выход" onClickHandler={() => navigate(AppPages.LOGIN)}></NavigationLink>
                    </li>
                )}
            </ul>
        </nav>
    )
};