import React from 'react';
import LoginForm from '../../components/LoginForm';

import './Login.scss';

export const Login = ({ login, registration: register }) => (
    <div className="wrapper">
        <LoginForm submitHandler={login} registrationRedirect={register} />
    </div>
)