import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoutes } from '../../common/app.routes';

import LoginForm from '../../components/LoginForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.scss';

export const Login = () => {
    const { login, isLoggedIn } = useContext(AuthContext);

    return isLoggedIn
        ? <Redirect to={AppRoutes.ORDER} />
        : <PageWithForm><LoginForm proceed={login} /></PageWithForm>;
};