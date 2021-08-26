import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import RegistrationForm from '../../components/RegistrationForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Registration.scss';
import { AppRoutes } from '../../common/app.routes';

export const Registration = () => {
    const { login, isLoggedIn } = useContext(AuthContext);

    return isLoggedIn
        ? <Redirect to={AppRoutes.ORDER} />
        : <PageWithForm><RegistrationForm proceed={login} /></PageWithForm>;
};