import React from 'react';
import LoginForm from '../../components/LoginForm';

import './Login.scss';

export const Login = ({ enter, registration }) => (
    <div className="wrapper">
        <LoginForm submitHandler={enter} registrationRedirect={registration} />
    </div>
)