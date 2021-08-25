import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.scss';

export const Login = ({ enter, redirect }) => {
    const { login } = useContext(AuthContext);

    return (
        <PageWithForm>
            <LoginForm proceed={(email, password) => { login(email, password); enter(); }} redirect={redirect} />
        </PageWithForm>
    );
};

Login.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};