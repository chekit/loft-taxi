import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './Select.scss';

export const FormSelect = ({ options, name, onSelectionChange }) => {
    const [value, setValue] = useState('');

    const setSelectValue = ({ target: { value } }) => {
        setValue(value);
        onSelectionChange(value);
    }

    return (
        <select className="form__select" value={value} onChange={setSelectValue} name={name} id={name}>
            <option value=""></option>
            {
                options
                    .map((option, index) => {
                        return <option value={option} key={index}>{option}</option>
                    })
            }
        </select>
    );
}

FormSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    onSelectionChange: PropTypes.func
};

FormSelect.defaultProps = {
    options: []
};