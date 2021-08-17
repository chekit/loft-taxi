import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import PageWithForm from '../../components/PageWithForm';

import './Login.scss';

export const Login = ({ enter, redirect }) => (
    <PageWithForm>
        <LoginForm proceed={enter} redirect={redirect} />
    </PageWithForm>
);

Login.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};