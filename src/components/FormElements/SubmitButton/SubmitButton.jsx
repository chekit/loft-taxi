import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.scss';
import classNames from 'classnames';

export const SUBMIT_TEST_ID = 'submit-button';

export const SubmitButton = ({ title, isDisabled, onClickHandler, modificators }) => {
    return (
        <button type="submit" className={classNames('form__submit', ...modificators)} onClick={onClickHandler} disabled={isDisabled} data-testid={SUBMIT_TEST_ID}>{title}</button>
    );
};

SubmitButton.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onClickHandler: PropTypes.func,
    modificators: PropTypes.arrayOf(
        PropTypes.oneOf(['is-dense', 'is-fill'])
    )
};

SubmitButton.defaultProps = {
    isDisabled: false,
    onClickHandler: () => { },
    modificators: []
};