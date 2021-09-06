import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.scss';

export const SUBMIT_TEST_ID = 'submit-button';

export const SubmitButton = ({ title, isDisabled, onClickHandler, modificators }) => {
    return (
        <button type="submit" className={`form__submit ${modificators.join(' ')}`} onClick={onClickHandler} disabled={isDisabled} data-testid={SUBMIT_TEST_ID}>{title}</button>
    );
};

SubmitButton.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onClickHandler: PropTypes.func,
    modificators: PropTypes.arrayOf(PropTypes.string)
};

SubmitButton.defaultProps = {
    isDisabled: false,
    onClickHandler: () => { },
    modificators: []
};