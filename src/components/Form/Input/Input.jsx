import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

export const FormInput = ({ label, value, type, name, placeholder, onChangeHandler, isRequired = false }) => {
    return (
        <>
            {label && <label htmlFor={name} className="form__label">{label}{isRequired && '*'}:</label>}
            <input
                className="form__input"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler} required={isRequired} />
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
    isRequired: PropTypes.bool
};

FormInput.defaultProps = {
    value: '',
    type: 'text',
    placeholder: '',
    isRequired: false
};