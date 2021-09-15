import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';
import classNames from 'classnames';

export const FORM_TITLE_TEST_ID = 'form-title';
export const DEFAULT_FORM_TEST_ID = 'form';

export const Form = ({ title, submitHandler, children, testId, classes }) => {
    return (
        <form className={classNames('form', ...classes)} onSubmit={submitHandler} data-testid={testId}>
            {title && <h2 className="form__title" data-testid={FORM_TITLE_TEST_ID}>{title}</h2>}
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
    testId: DEFAULT_FORM_TEST_ID,
    classes: []
};