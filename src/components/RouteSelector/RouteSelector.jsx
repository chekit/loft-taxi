import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { requestAddressList } from '../../store/addressList';
import { cancelRequestRoute, requestRoute } from '../../store/route/actions';
import SubmitButton from '../FormElements/SubmitButton';
import { AppRoutes } from './../../common/app.routes';

import './RouteSelector.scss';
import Tariffs from './Tariffs';

export const RouteSelector = ({ history }) => {
    const [isOrdered, setOrdered] = useState(false);
    const [isProfileFilled, setIsProfileFilled] = useState(false);
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);

    const dispatch = useDispatch();
    const store = useStore();
    const { profileData, addressList, isLoading, currentRoute } = store.getState();

    useEffect(() => {
        if (profileData && !addressList.length) {
            dispatch(requestAddressList());
        }

        setIsProfileFilled(!!profileData &&
            !!profileData.cardName &&
            !!profileData.cardNumber &&
            !!profileData.expiryDate &&
            !!profileData.cvc
        );

        setOrdered(currentRoute.length > 0);
    }, [dispatch, profileData, currentRoute, addressList]);

    const getAddressList = current => addressList.filter(address => address !== current);

    return !isLoading &&
        (
            <div className="route-select">
                <div className="route-select__header">
                    {isOrdered && <h2 className="route-select__title">Заказ размещен</h2>}
                    {!isProfileFilled && <h2 className="route-select__title">Заполните платежные данные</h2>}
                    {isProfileFilled && !isOrdered && <>
                        <Autocomplete
                            id="start-point"
                            options={getAddressList(finish)}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(_, value) => setStart(value)}
                        />
                        <Autocomplete
                            id="end-point"
                            options={getAddressList(start)}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(_, value) => setFinish(value)}
                        />
                    </>}
                </div>
                <div className="route-select__body">
                    {isOrdered && <p className="route-select__text">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>}
                    {!isProfileFilled && <p className="route-select__text">Укажите информацию о банковской карте, чтобы сделать заказ.</p>}
                    {isProfileFilled && !isOrdered && <Tariffs />}
                </div>
                <div className="route-select__footer">
                    {isOrdered && <SubmitButton title='Сделать новый заказ' modificators={['is-dense', 'is-fill']} onClickHandler={() => {
                        setStart('');
                        setFinish('');
                        dispatch(cancelRequestRoute());
                    }} />}
                    {!isProfileFilled && <SubmitButton title='Перейти в профиль' modificators={['is-dense', 'is-fill']} onClickHandler={() => history.push(AppRoutes.PROFILE)} />}
                    {
                        isProfileFilled && !isOrdered && <SubmitButton title='Заказать' modificators={['is-dense', 'is-fill']} isDisabled={!start || !finish} onClickHandler={() => {
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