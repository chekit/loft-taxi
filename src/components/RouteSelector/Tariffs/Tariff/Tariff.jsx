import PropTypes from 'prop-types';
import React from 'react';

import './Tariff.scss';

export const Tariff = ({ title, price, visual, handleSelect }) => {
    return (
        <div className="tariff" onClick={handleSelect}>
            <p className="tariff__title">{title}</p>
            <p className="tariff__text">Стоимость</p>
            <p className="tariff__price">{price}&#8381;</p>
            <img src={visual} alt={title} className="tariff__visual" />
        </div>
    );
};

Tariff.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    visual: PropTypes.string,
    handleSelect: PropTypes.func
}

Tariff.defaultProps = {
    price: 0,
    visual: '',
    handleSelect: () => { }
}