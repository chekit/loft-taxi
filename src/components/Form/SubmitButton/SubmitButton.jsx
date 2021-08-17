import React from 'react';

import './SubmitButton.scss';

export const SubmitButton = ({ title, isDisabled = false }) => {
    return (
        <button type="submit" className="form__submit" disabled={isDisabled}>{title}</button>
    );
};