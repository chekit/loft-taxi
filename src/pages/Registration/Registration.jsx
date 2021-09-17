import React from 'react';
import { Redirect } from 'react-router-dom';

import RegistrationForm from '../../components/Forms/RegistrationForm';
import PageWithForm from '../../components/Struct/PageWithForm';

import { AppRoutes } from '../../common/app.routes';
import { useStore } from 'react-redux';

export const Registration = () => {
    const store = useStore();
    const { isLoggedIn, isLoading } = store.getState();

    return isLoggedIn
        ? <Redirect to={AppRoutes.ORDER} />
        : <PageWithForm>{!isLoading && <RegistrationForm />}</PageWithForm>;
};