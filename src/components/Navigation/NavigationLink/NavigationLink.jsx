import React from 'react';

import './NavigationLink.scss';

export const NavigationLink = ({ isActive = false, title, onClickHandler }) => {
    return (
        // @TODO: Change to link
        <span className={`navigation__link ${isActive ? 'is-active' : ''}`} onClick = {onClickHandler}>{ title }</span>
    );
}