import React from 'react';
import LoginForm from '../../components/LoginForm';

import './Login.scss';

// @TODO: Temporary
interface LoginProps {
    login: VoidFunction;
}

export const Login = ({ login }: LoginProps) => (
    <div className="wrapper">
        <LoginForm submitHandler={login} />
    </div>
)