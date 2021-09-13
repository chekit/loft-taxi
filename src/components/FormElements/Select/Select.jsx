import React from 'react';

import './Select.scss';

export const FormSelect = ({ value, name}) => {
    return (
        <select className="form__select" name={name} id={name}>
            <option value={value}>{value}</option>
        </select>
    );
}