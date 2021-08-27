import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import './Navigation.scss';

export const NAV_TEST_ID = 'navigation';
export const LINK_TEST_ID = 'navigation-link';

// @TODO: Add logic for mobile devices
export const Navigation = () => {
    let history = useHistory();
    const { logout, isLoggedIn } = useContext(AuthContext);
    const [isVisible, toggleNav] = useState(false);

    const logoutUser = () => {
        logout();
        history.replace({ pathname: "/" });
    };

    const openNav = () => {
        toggleNav(true);
    }

    const closeNav = () => {
        toggleNav(false);
    }

    return (
        <>
            <button className="open-nav-button" onClick={openNav}>
                <span className="open-nav-button__item"></span>
                <span className="open-nav-button__item is-short"></span>
                <span className="open-nav-button__item"></span>
            </button>
            <nav className={`navigation ${isVisible ? 'is-visible' : ''}`} data-testid={NAV_TEST_ID}>
                <ul className="navigation-list">
                    <li className="navigation-list__item">
                        <NavLink className="navigation__link" to="/order" onClick={closeNav} activeClassName="is-active">Карта</NavLink>
                    </li>
                    <li className="navigation-list__item">
                        <NavLink className="navigation__link" to="/profile" onClick={closeNav} activeClassName="is-active">Профиль</NavLink>
                    </li>
                    {isLoggedIn && (
                        <li className="navigation-list__item">
                            <button className="navigation__link" onClick={logoutUser}>Выход</button>
                        </li>
                    )}
                </ul>
                <button className="close-nav-button" onClick={closeNav}>X</button>
            </nav>
        </>
    );
};

Navigation.propTypes = {
    currentPage: PropTypes.number,
};
