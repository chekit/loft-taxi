import React, { useState } from 'react';
import Tariff from './Tariff';
import classNames from 'classnames';

import './Tariffs.scss';

import standart from './../../../assets/cars/standart.png';
import premium from './../../../assets/cars/premium.png';
import business from './../../../assets/cars/business.png';

export const TariffsTypes = {
    STANDART: 'standart',
    PREMIUM: 'premium',
    BUSINESS: 'business',
}

export const Tariffs = () => {
    const [selectedTariff, setTariff] = useState(TariffsTypes.STANDART);

    return (
        <div className="tariffs">
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.STANDART })} onClick={() => setTariff(TariffsTypes.STANDART)}>
                <Tariff title="Стандарт" price={150} visual={standart} />
            </div>
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.PREMIUM })} onClick={() => setTariff(TariffsTypes.PREMIUM)}>
                <Tariff title="Премиум" price={250} visual={premium} />
            </div>
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.BUSINESS })} onClick={() => setTariff(TariffsTypes.BUSINESS)}>
                <Tariff title="Бизнес" price={300} visual={business} />
            </div>
        </div>
    );
};