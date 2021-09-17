import React from 'react';
import PropTypes from 'prop-types';

import './Fieldset.scss';
import classNames from 'classnames';

export const FieldsetOrientation = {
    DEFAULT: '',
    HORIZONTAL: 'is-horizontal'
};

export const FIELDSET_TEST_ID = 'test-fieldset'

export const Fieldset = ({ children, type, hint: FieldHint }) => {
    return (
        <fieldset className={classNames('form__fieldset', type)} data-testid={FIELDSET_TEST_ID}>
            {children}
            {FieldHint && <FieldHint />}
        </fieldset>
    );
};

Fieldset.propTypes = {
    type: PropTypes.oneOf([FieldsetOrientation.DEFAULT, FieldsetOrientation.HORIZONTAL]),
    hint: PropTypes.elementType,
};


Fieldset.defaultProps = {
    type: FieldsetOrientation.DEFAULT,
};