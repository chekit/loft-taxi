import React from 'react';

import './Form.scss';

export const Form = ({ title, submitHandler, children }) => {
    return (
        <form className="form" onSubmit={submitHandler}>
            <h2 className="form__title">{title}</h2>
            {children}
        </form>
    );
}