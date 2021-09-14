import React, { useState } from 'react';
import Tariff from './Tariff';

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
            <div className={`tariffs__item ${ selectedTariff === TariffsTypes.STANDART ? 'is-active': '' }`}>
                <Tariff title="Стандарт" price={150} handleSelect={() => setTariff(TariffsTypes.STANDART)} visual={standart} />
            </div>
            <div className={`tariffs__item ${selectedTariff === TariffsTypes.PREMIUM ? 'is-active': '' }`}>
                <Tariff title="Премиум" price={250} handleSelect={() => setTariff(TariffsTypes.PREMIUM)} visual={premium} />
            </div>
            <div className={`tariffs__item ${selectedTariff === TariffsTypes.BUSINESS ? 'is-active': '' }`}>
                <Tariff title="Бизнес" price={300} handleSelect={() => setTariff(TariffsTypes.BUSINESS)} visual={business} />
            </div>
        </div>
    );
};