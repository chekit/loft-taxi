import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hint.scss';

export const HintType = {
    ERROR: 'error'
}

export const Hint = ({ message, type }) => {
    return <p className={classNames('form__hint', { 'is-error': type === HintType.ERROR })}>{message}</p>;
}

Hint.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(Object.values(HintType))
};

Hint.defaultProps = {
    message: 'Error message',
    type: HintType.ERROR
};