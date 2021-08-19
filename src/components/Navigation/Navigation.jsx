import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppPages } from '../../common/models';
import { AuthContext } from '../../contexts/AuthContext';
import NavigationLink from './NavigationLink';

import './Navigation.scss';

// @TODO: Add logic for mobile devices
export const Navigation = ({ navigate, currentPage }) => {
    const { logout } = useContext(AuthContext);

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <NavigationLink title="Карта" onClickHandler={() => navigate(AppPages.MAP)} isActive={currentPage === AppPages.MAP}></NavigationLink>
                </li>
                <li className="navigation-list__item">
                    <NavigationLink title="Профиль" onClickHandler={() => navigate(AppPages.PROFILE)} isActive={currentPage === AppPages.PROFILE}></NavigationLink>
                </li>
                <li className="navigation-list__item">
                    <NavigationLink title="Выход" onClickHandler={() => { logout(); navigate(AppPages.LOGIN) }}></NavigationLink>
                </li>
            </ul>
        </nav>

    );
};

Navigation.propTypes = {
    navigate: PropTypes.func,
    currentPage: PropTypes.number,
};
