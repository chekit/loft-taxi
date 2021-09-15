import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PageWithForm.scss';

export const PageWithForm = ({ children, isFadeout }) => (
    <div className={classNames('wrapper', { 'is-fadeout': isFadeout })}>
        {children}
    </div>
);

PageWithForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isFadeout: PropTypes.bool
};

PageWithForm.defaultProps = {
    isFadeout: false
};