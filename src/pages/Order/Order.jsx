import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import Map from '../../components/Map';
import RouteSelector from '../../components/RouteSelector';
import { requestProfile } from '../../store/profile';

import './Order.scss';

export const Order = ({ history }) => {
    const dispatch = useDispatch();
    const store = useStore();
    const { userData: { token } } = store.getState();

    useEffect(() => {
        dispatch(requestProfile(token));
    }, [dispatch, token]);

    return (
        <div className="wrapper">
            <RouteSelector history={history} />
            <Map />
        </div>
    );
};