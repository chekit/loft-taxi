import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';
import Fieldset from '../Fieldset';

export const INPUT_TEST_ID = 'input';

export const FormInput = ({ label, value, type, name, placeholder, onChangeHandler, isRequired, isDisabled, maxlength, isLight, hasError }) => {
    const labelClasses = [];

    if (isLight) {
        labelClasses.push('is-light');
    }

    if (hasError) {
        labelClasses.push('is-error');
    }

    return (
        <Fieldset>
            {label && <label htmlFor={name} className={`form__label ${labelClasses.join(' ')}`} data-testid="label">{label}{isRequired && '*'}:</label>}
            <input
                className="form__input"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                required={isRequired}
                disabled={isDisabled}
                maxLength={maxlength}
                data-testid={INPUT_TEST_ID}
             />
        </Fieldset>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    // @TODO: Could be expanded further
    value: PropTypes.oneOfType([PropTypes.string]),
    type: PropTypes.oneOf(['email', 'text', 'password', 'number']),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
    maxlength: PropTypes.number,
    isLight: PropTypes.bool,
    hasError: PropTypes.bool,
};

FormInput.defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
    isRequired: false,
    isDisabled: false,
    isLight: false,
    hasError: false,
    onChangeHandler: () => {}
};