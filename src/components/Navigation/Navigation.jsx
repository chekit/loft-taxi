import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppPages } from '../../common/models';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import './Navigation.scss';

export const NAV_TEST_ID = 'navigation';

// @TODO: Add logic for mobile devices
export const Navigation = ({ navigate, currentPage }) => {
    let history = useHistory();
    const { logout } = useContext(AuthContext);

    const logoutUser = () => {
        logout();
        history.replace({ pathname: "/" };
    };

    return (
        <nav className="navigation" data-testid={NAV_TEST_ID}>
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <NavLink className="navigation__link" to="/order" activeClassName="is-active">Карта</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation__link" to="/profile" activeClassName="is-active">Профиль</NavLink>
                </li>
                {currentPage !== AppPages.LOGIN && (
                    <li className="navigation-list__item">
                        <button className="navigation__link" onClick={logoutUser}>Выход</button>
                    </li>
                )}
            </ul>
        </nav>

    );
};

Navigation.propTypes = {
    navigate: PropTypes.func,
    currentPage: PropTypes.number,
};
