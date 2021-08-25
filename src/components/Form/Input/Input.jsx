import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const INPUT_TEST_ID = 'input';

export const FormInput = ({ label, value, type, name, placeholder, onChangeHandler, isRequired, isDisabled }) => {
    return (
        <>
            {label && <label htmlFor={name} className="form__label" data-testid="label">{label}{isRequired && '*'}:</label>}
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
                data-testid={INPUT_TEST_ID}
             />
        </>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    // @TODO: Could be expanded further
    value: PropTypes.oneOfType([PropTypes.string]),
    type: PropTypes.oneOf(['email', 'text', 'password']),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

FormInput.defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
    isRequired: false,
    isDisabled: false,
    onChangeHandler: () => {}
};