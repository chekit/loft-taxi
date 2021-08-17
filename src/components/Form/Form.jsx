import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

export const Form = ({ title, submitHandler, children }) => {
    return (
        <form className="form" onSubmit={submitHandler}>
            <h2 className="form__title">{title}</h2>
            {children}
        </form>
    );
};

Form.propTypes = {
    title: PropTypes.string,
    submitHandler: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element)
};