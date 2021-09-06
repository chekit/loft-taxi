import React from 'react';
import PropTypes from 'prop-types';

import './Fieldset.scss';

export const FieldsetOrientation = {
    DEFAULT: '',
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
    type: PropTypes.oneOf([FieldsetOrientation.DEFAULT, FieldsetOrientation.HORIZONTAL]),
};


Fieldset.defaultProps = {
    type: FieldsetOrientation.DEFAULT
};