import React from 'react';
import { AppRoutes } from '../../common/app.routes';
import SubmitButton from '../../components/FormElements/SubmitButton';
import Map from '../../components/Map';

import './Order.scss';

export const Order = ({ history }) => (
    <div className="wrapper">
        {/* @TODO: Move to Component */}

        {/* <div className="route-select">
            <div className="route-select__header">
                <h2 className="route-select__title">Заказ размещен</h2>
            </div>
            <div className="route-select__body">
                <p className="route-select__text">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
            </div>
            <div className="route-select__footer">
                <SubmitButton title={'Сделать новый заказ'} modificators={['is-dense', 'is-fill']} />
            </div>
        </div> */}
        {/* @TODO: Move to Component */}
        <div className="route-select">
            <div className="route-select__header">
                <h2 className="route-select__title">Заполните платежные данные</h2>
            </div>
            <div className="route-select__body">
                <p className="route-select__text">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
            </div>
            <div className="route-select__footer">
                <SubmitButton title={'Перейти в профиль'} modificators={['is-dense', 'is-fill']} onClickHandler={() => history.push(AppRoutes.PROFILE)} />
            </div>
        </div>

        <Map />
    </div>
);