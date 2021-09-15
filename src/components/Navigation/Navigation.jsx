import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { logoutRequest } from './../../store/logout';
import { NavLink, useHistory } from 'react-router-dom';

import './Navigation.scss';
import { AppRoutes } from '../../common/app.routes';

export const NAV_TEST_ID = 'navigation';
export const LINK_TEST_ID = 'navigation-link';

// @TODO: Add logic for mobile devices
const Navigation = props => {
    let history = useHistory();
    const [isVisible, toggleNav] = useState(false);
    const { logoutRequest } = props;

    const logoutUser = () => {
        logoutRequest();
        history.replace({ pathname: AppRoutes.MAIN });
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
            <nav className={classNames('navigation', { 'is-visible': isVisible })} data-testid={NAV_TEST_ID}>
                <ul className="navigation-list">
                    <li className="navigation-list__item">
                        <NavLink className="navigation__link" to={AppRoutes.ORDER} onClick={closeNav} activeClassName="is-active">Карта</NavLink>
                    </li>
                    <li className="navigation-list__item">
                        <NavLink className="navigation__link" to={AppRoutes.PROFILE} onClick={closeNav} activeClassName="is-active">Профиль</NavLink>
                    </li>
                    <li className="navigation-list__item">
                        <button className="navigation__link" onClick={logoutUser}>Выход</button>
                    </li>
                </ul>
                <button className="close-nav-button" onClick={closeNav}>X</button>
            </nav>
        </>
    );
};

Navigation.propTypes = {
    currentPage: PropTypes.number,
};

const mapDispatchToProps = { logoutRequest };


export default connect(null, mapDispatchToProps)(Navigation);