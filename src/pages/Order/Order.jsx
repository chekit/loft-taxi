import React from 'react';
import Map from '../../components/Map';
import RouteSelector from '../../components/RouteSelector';

import './Order.scss';

export const Order = ({ history }) => {
    return (
        <div className="wrapper">

            <RouteSelector history={history} />
            <Map />
        </div>
    );
};