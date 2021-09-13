import React from 'react';
import Tariff from './Tariff';

import './Tariffs.scss';

export const Tariffs = () => {
    return (
        <div className="tariffs">
            <div className="tariffs__item is-active">
                <Tariff title="Стандарт" price="150" visual="image" />
            </div>
            <div className="tariffs__item">
                <Tariff title="Премиум" price="250" visual="image" />
            </div>
            <div className="tariffs__item">
                <Tariff title="Бизнес" price="300" visual="image" />
            </div>
        </div>
    );
};