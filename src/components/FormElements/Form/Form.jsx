import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

export const Form = ({ title, submitHandler, children, testId, classes }) => {
    return (
        <form className={`form ${classes.join(' ')}`} onSubmit={submitHandler} data-testid={testId}>
            {title && <h2 className="form__title" data-testid="form-title">{title}</h2>}
            {children}
        </form>
    );
};

Form.propTypes = {
    title: PropTypes.string,
    submitHandler: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    testId: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string)
};

Form.defaultProps = {
    submitHandler: () => { },
    testId: 'form',
    classes: []
};