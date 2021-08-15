import React from 'react';

import './Input.scss';

export const FormInput = ({ label, value, type, name, placeholder, onChangeHandler, isRequired = false }) => {
    return (
        <>
            <label htmlFor={name} className="form__label">{label}{isRequired && '*'}</label>
            <input type={type} name={name} id={name} className="form__input" placeholder={placeholder} value={value} onChange={onChangeHandler} required={isRequired} />
        </>
    );
}