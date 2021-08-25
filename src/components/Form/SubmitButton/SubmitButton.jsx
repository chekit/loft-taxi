import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.scss';

export const SUBMIT_TEST_ID = 'submit-button';

export const SubmitButton = ({ title, isDisabled, onClickHandler }) => {
    return (
        <button type="submit" className="form__submit" onClick={onClickHandler} disabled={isDisabled} data-testid={SUBMIT_TEST_ID}>{title}</button>
    );
};

SubmitButton.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onClickHandler: PropTypes.func
};

SubmitButton.defaultProps = {
    isDisabled: false,
    onClickHandler: () => { }
};