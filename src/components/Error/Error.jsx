import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

export const Error = ({ message }) => {
    return (
        <div className="error">
            <p className="error__text">{message}</p>
        </div>
    );
};

Error.propTypes = {
    mesage: PropTypes.string
};