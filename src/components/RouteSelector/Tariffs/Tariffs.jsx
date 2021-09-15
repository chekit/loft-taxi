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
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.STANDART })}>
                <Tariff title="Стандарт" price={150} handleSelect={() => setTariff(TariffsTypes.STANDART)} visual={standart} />
            </div>
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.PREMIUM })}>
                <Tariff title="Премиум" price={250} handleSelect={() => setTariff(TariffsTypes.PREMIUM)} visual={premium} />
            </div>
            <div className={classNames('tariffs__item', { 'is-active': selectedTariff === TariffsTypes.BUSINESS })}>
                <Tariff title="Бизнес" price={300} handleSelect={() => setTariff(TariffsTypes.BUSINESS)} visual={business} />
            </div>
        </div>
    );
};