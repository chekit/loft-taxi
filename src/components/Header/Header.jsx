import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Navigation from '../Navigation';
import { AuthContext } from '../../contexts/AuthContext';

import './Header.scss';

export const Header = ({ navigate, currentPage }) => {
    return (
        <AuthContext.Consumer>{(context) => {
            const isShowNavigation = context.isLoggedIn;

            return (
                <header className={`header ${!isShowNavigation && 'is-vertical'}`}>
                    <Logo currentPage={currentPage} />
                    {isShowNavigation && <Navigation navigate={navigate} currentPage={currentPage} />}
                </header>
            );
        }}
        </AuthContext.Consumer>
    );
};

Header.propTypes = {
    navigate: PropTypes.func,
    currentPage: PropTypes.number
};