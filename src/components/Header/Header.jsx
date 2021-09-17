import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Logo from '../Logo';
import Navigation from '../Navigation';

import './Header.scss';
import { connect } from 'react-redux';

export const HEADER_TEST_ID = 'header';

export const Header = ({ isLoggedIn }) => {
    return (
        <header className={classNames('header', { 'is-not-auth': !isLoggedIn })} data-testid={HEADER_TEST_ID}>
            <Logo isLoggedIn={isLoggedIn} />
            {isLoggedIn && <Navigation />}
        </header>
    );
};

Header.propTypes = {
    isLoggedIn: PropTypes.bool
};

Header.defaultProps = {
    isLoggedIn: false
};

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Header);