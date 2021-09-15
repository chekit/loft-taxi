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
    const [isProfileFilled, setIsProfileFilled] = useState(false);
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);

    const dispatch = useDispatch();
    const store = useStore();
    const { profileData, addressList, isLoading } = store.getState();

    useEffect(() => {
        if (profileData) {
            dispatch(requestAddressList());
        }

        setIsProfileFilled(!!profileData &&
            !!profileData.cardName &&
            !!profileData.cardNumber &&
            !!profileData.expiryDate &&
            !!profileData.cvc
        );
    }, [dispatch, profileData]);

    const getAddressList = current => addressList.filter(address => address !== current)

    return !isLoading &&
        (
            <div className="route-select">
                <div className="route-select__header">
                    {isOrdered && <h2 className="route-select__title">Заказ размещен</h2>}
                    {!isProfileFilled && <h2 className="route-select__title">Заполните платежные данные</h2>}
                    {isProfileFilled && !isOrdered && <>
                        <FormSelect options={getAddressList(finish)} onSelectionChange={value => setStart(value)} name="start" />
                        <br />
                        <FormSelect options={getAddressList(start)} onSelectionChange={value => setFinish(value)} name="finish" />
                    </>}
                </div>
                <div className="route-select__body">
                    {isOrdered && <p className="route-select__text">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>}
                    {!isProfileFilled && <p className="route-select__text">Укажите информацию о банковской карте, чтобы сделать заказ.</p>}
                    {isProfileFilled && !isOrdered && <Tariffs />}
                </div>
                <div className="route-select__footer">
                    {isOrdered && <SubmitButton title='Сделать новый заказ' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                        toOrder(false);
                        setStart('');
                        setFinish('');
                        dispatch(cancelRequestRoute());
                    }} />}
                    {!isProfileFilled && <SubmitButton title='Перейти в профиль' modificators={['is-dense', 'is-fill']} onClickHandler={() => history.push(AppRoutes.PROFILE)} />}
                    {
                        isProfileFilled && !isOrdered && <SubmitButton title='Заказать' modificators={['is-dense', 'is-fill']} isDisabled={!start || !finish} onClickHandler={() => {
                            toOrder(true);
                            dispatch(requestRoute({
                                address1: start,
                                address2: finish
                            }));
                        }} />
                    }
                </div>
            </div>
        );
};