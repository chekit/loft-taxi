import React from 'react';
import { AppPages } from '../../common/models';
import { NavLink, useHistory } from 'react-router-dom';

import './Navigation.scss';

// @TODO: Add logic for mobile devices
export const Navigation = ({ navigate, currentPage }) => {
    let history = useHistory();
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <NavLink className="navigation__link" to="/order" activeClassName="is-active">Карта</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation__link" to="/profile" activeClassName="is-active">Профиль</NavLink>
                </li>
                {currentPage !== AppPages.LOGIN && (
                    <li className="navigation-list__item">
                        <button className="navigation__link" onClick={() => history.replace({ pathname: "/" })}>Выход</button>
                    </li>
                )}
            </ul>
        </nav>
    )
};