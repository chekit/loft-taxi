import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.scss';

export const SubmitButton = ({ title, isDisabled, onClickHandler }) => {
    return (
        <button type="submit" className="form__submit" onClick={onClickHandler} disabled={isDisabled}>{title}</button>
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