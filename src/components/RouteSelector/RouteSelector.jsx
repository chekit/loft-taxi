import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import { requestAddressList } from '../../store/addressList';
import { cancelRequestRoute, requestRoute } from '../../store/route/actions';
import SubmitButton from '../FormElements/SubmitButton';
import { AppRoutes } from './../../common/app.routes';

import './RouteSelector.scss';

export const RouteSelector = ({ history }) => {
    const [isOrdered, toOrder] = useState(false);
    const dispatch = useDispatch();
    const store = useStore();
    const { profileData } = store.getState();

    useEffect(() => {
        dispatch(requestAddressList());
    }, [dispatch]);

    return (
        <>
            {
                isOrdered && <div className="route-select">
                    <div className="route-select__header">
                        <h2 className="route-select__title">Заказ размещен</h2>
                    </div>
                    <div className="route-select__body">
                        <p className="route-select__text">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                    </div>
                    <div className="route-select__footer">
                        <SubmitButton title='Сделать новый заказ' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                            toOrder(false);
                            dispatch(cancelRequestRoute());
                        }} />
                    </div>
                </div>
            }
            {
                !profileData && <div className="route-select">
                    <div className="route-select__header">
                        <h2 className="route-select__title">Заполните платежные данные</h2>
                    </div>
                    <div className="route-select__body">
                        <p className="route-select__text">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                    </div>
                    <div className="route-select__footer">
                        <SubmitButton title='Перейти в профиль' modificators={['is-dense', 'is-fill']} onClickHandler={() => history.push(AppRoutes.PROFILE)} />
                    </div>
                </div>
            }
            {
                profileData && !isOrdered && <div className="route-select">
                    <div className="route-select__header">
                        <select name="address1" id="address1">
                            <option value="Эрмитаж">Эрмитаж</option>
                        </select>
                        <select name="address2" id="address2">
                            <option value="Мариинский театр">Мариинский театр</option>
                        </select>
                    </div>
                    <div className="route-select__body">
                        <div className="tariffs">
                            <div className="tariffs__item tariff">
                                <p className="tariff__title">Стандарт</p>
                                <p className="tariff__text">Стоимость</p>
                                <p className="tariff__price">150Р</p>
                                <p className="tariff__visual">image</p>
                            </div>
                            <div className="tariffs__item tariff">
                                <p className="tariff__title">Премиум</p>
                                <p className="tariff__text">Стоимость</p>
                                <p className="tariff__price">250Р</p>
                                <p className="tariff__visual">image</p>
                            </div>
                            <div className="tariffs__item tariff">
                                <p className="tariff__title">Бизнес</p>
                                <p className="tariff__text">Стоимость</p>
                                <p className="tariff__price">300Р</p>
                                <p className="tariff__visual">image</p>
                            </div>
                        </div>
                    </div>
                    <div className="route-select__footer">
                        <SubmitButton title='Заказать' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                            toOrder(true);
                            dispatch(requestRoute({
                                address1: 'Эрмитаж',
                                address2: 'Мариинский театр'
                            }));
                        }} />
                    </div>
                </div>
            }
        </>
    );
};