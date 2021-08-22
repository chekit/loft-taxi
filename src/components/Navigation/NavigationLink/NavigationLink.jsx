import React from 'react';
import PropTypes from 'prop-types';

import './NavigationLink.scss';

export const LINK_TEST_ID = 'link-item';

export const NavigationLink = ({ isActive, title, onClickHandler }) => {
    return (
        // @TODO: Change to link
        <span className={`navigation__link ${isActive ? 'is-active' : ''}`} onClick={(e) => { !isActive && onClickHandler(e) }} data-testid={LINK_TEST_ID}>{title}</span>
    );
};

NavigationLink.propTypes = {
    isActive: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
};


NavigationLink.defaultProps = {
    isActive: false
};