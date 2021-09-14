import React from 'react';
import Tariff from './Tariff';

import './Tariffs.scss';

import standart from './../../../assets/cars/standart.png';
import premium from './../../../assets/cars/premium.png';
import business from './../../../assets/cars/business.png';

export const Tariffs = () => {
    return (
        <div className="tariffs">
            <div className="tariffs__item is-active">
                <Tariff title="Стандарт" price="150" visual={standart} />
            </div>
            <div className="tariffs__item">
                <Tariff title="Премиум" price="250" visual={premium} />
            </div>
            <div className="tariffs__item">
                <Tariff title="Бизнес" price="300" visual={business} />
            </div>
        </div>
    );
};