import React from 'react';
import LoginForm from '../../components/LoginForm';
import PageWithForm from '../../components/PageWithForm';

import './Login.scss';

export const Login = ({ enter, redirect }) => (
    <PageWithForm>
        <LoginForm proceed={enter} redirect={redirect} />
    </PageWithForm>
);