import React from 'react';
import PropTypes from 'prop-types';

import './PageWithForm.scss';

export const PageWithForm = ({ children }) => (
    <div className="wrapper">
        {children}
    </div>
);

PageWithForm.propTypes = {
    children: PropTypes.element
}