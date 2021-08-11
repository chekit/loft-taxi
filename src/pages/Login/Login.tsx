import React from 'react';

import './Login.scss';

// @TODO: Temporary
interface LoginProps {
    login: VoidFunction;
}

export const Login = ({ login }: LoginProps) => (
    <>
        <p>Login Page</p>
        <button onClick={login}>Войти</button>
    </>
)