import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';
import Fieldset from '../Fieldset';
import classNames from 'classnames';
import Hint from '../Hint';
import { HintType } from '../Hint/Hint';

export const INPUT_TEST_ID = 'input';
export const LABEL_TEST_ID = 'label';

export const FormInput = props => {
    const { label, value, type, name, placeholder, onChangeHandler, isRequired, isDisabled, maxlength, isLight, hasError, errorMessage, autocomplete } = props;

    return (
        <Fieldset hint={() => hasError && <Hint type={HintType.ERROR} message={errorMessage} />}>
            {label && <label htmlFor={name} className={classNames('form__label', { 'is-light': isLight, 'is-error': hasError })} data-testid={LABEL_TEST_ID}>{label}{isRequired && '*'}:</label>}
            <input
                className="form__input"
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={isDisabled}
                name={name}
                value={value}
                onChange={onChangeHandler}
                required={isRequired}
                maxLength={maxlength}
                autoComplete={autocomplete}
                data-testid={INPUT_TEST_ID}
            />
        </Fieldset>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string]),
    type: PropTypes.oneOf(['email', 'text', 'password', 'number']),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    isRequired: PropTypes.bool,
    isDisabled: PropTypes.bool,
    maxlength: PropTypes.number,
    isLight: PropTypes.bool,
    hasError: PropTypes.bool,
    error: PropTypes.elementType,
    errorMessage: PropTypes.string,
    autocomplete : PropTypes.string
};

FormInput.defaultProps = {
    type: 'text',
    placeholder: '',
    isRequired: false,
    isDisabled: false,
    isLight: false,
    hasError: false,
    errorMessage: '',
    autocomplete: ''
};