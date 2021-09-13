import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import { requestAddressList } from '../../store/addressList';
import { cancelRequestRoute, requestRoute } from '../../store/route/actions';
import FormSelect from '../FormElements/Select';
import SubmitButton from '../FormElements/SubmitButton';
import { AppRoutes } from './../../common/app.routes';

import './RouteSelector.scss';
import Tariffs from './Tariffs';

export const RouteSelector = ({ history }) => {
    const [isOrdered, toOrder] = useState(false);
    const dispatch = useDispatch();
    const store = useStore();
    const { profileData } = store.getState();

    useEffect(() => {
        dispatch(requestAddressList());
    }, [dispatch]);

    return (
        <div className="route-select">
            <div className="route-select__header">
                {isOrdered && <h2 className="route-select__title">Заказ размещен</h2>}
                {!profileData && <h2 className="route-select__title">Заполните платежные данные</h2>}
                {profileData && !isOrdered && <>
                    <FormSelect value="Эрмитаж" name="address1" />
                    <br />
                    <FormSelect value="Мариинский театр" name="address2" />
                </>}
            </div>
            <div className="route-select__body">
                {isOrdered && <p className="route-select__text">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>}
                {!profileData && <p className="route-select__text">Укажите информацию о банковской карте, чтобы сделать заказ.</p>}
                {profileData && !isOrdered && <Tariffs />}
            </div>
            <div className="route-select__footer">
                {isOrdered && <SubmitButton title='Сделать новый заказ' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                    toOrder(false);
                    dispatch(cancelRequestRoute());
                }} />}
                {!profileData && <SubmitButton title='Перейти в профиль' modificators={['is-dense', 'is-fill']} onClickHandler={() => history.push(AppRoutes.PROFILE)} />}
                {
                    profileData && !isOrdered && <SubmitButton title='Заказать' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                        toOrder(true);
                        dispatch(requestRoute({
                            address1: 'Эрмитаж',
                            address2: 'Мариинский театр'
                        }));
                    }} />
                }
            </div>
        </div>
    );
};