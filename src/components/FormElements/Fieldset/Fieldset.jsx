import React from 'react';
import { PropTypes } from 'prop-types';

import './Fieldset.scss';

export const FieldsetOrientation = {
    HORIZONTAL: 'is-horizontal'
};

export const Fieldset = ({ children, type }) => {
    return (
        <fieldset className={`form__fieldset ${type}`}>
            {children}
        </fieldset>
    );
};

Fieldset.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    type: PropTypes.string
};


Fieldset.defaultProps = {
    type: ''
};