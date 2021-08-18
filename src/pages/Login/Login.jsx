import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Login.scss';

export const Login = ({ enter, redirect }) => (
    <AuthContext.Consumer>{(context) => {
        const { login } = context;

        return (
            <PageWithForm>
                <LoginForm proceed={() => { login(); enter(); }} redirect={redirect} />
            </PageWithForm>
        );
    }}</AuthContext.Consumer>
);

Login.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};