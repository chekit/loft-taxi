import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Map from '../../components/Map';
import RouteSelector from '../../components/RouteSelector';
import { requestProfile } from '../../store/profile';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: auto;
    height: 100%;
`;

export const Order = ({ history }) => {
    const dispatch = useDispatch();
    const store = useStore();
    const { userData: { token } } = store.getState();

    useEffect(() => {
        dispatch(requestProfile(token));
    }, [dispatch, token]);

    return (
        <Wrapper>
            <RouteSelector history={history} />
            <Map />
        </Wrapper>
    );
};