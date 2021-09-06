import React from 'react';
import PropTypes from 'prop-types';

import './PageWithForm.scss';

export const PageWithForm = ({ children, isFadeout }) => (
    <div className={`wrapper ${isFadeout && 'is-fadeout'}`}>
        {children}
    </div>
);

PageWithForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isFadeout: PropTypes.bool
};

PageWithForm.defaultProps = {
    isFadeout: false
};