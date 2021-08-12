import React from 'react';
import LoginForm from '../../components/LoginForm';

import './Login.scss';

// @TODO: Temporary
interface LoginProps {
    login: VoidFunction;
    registration: VoidFunction;
}

export const Login = ({ login, registration: register }: LoginProps) => (
    <div className="wrapper">
        <LoginForm submitHandler={login} registrationRedirect={register} />
    </div>
)