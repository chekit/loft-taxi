import React from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from '../../components/RegistrationForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Registration.scss';

export const Registration = ({ enter, redirect }) => {
    return (
        <AuthContext.Consumer>{(context) => {
            const { login } = context;

            return (
                <PageWithForm>
                    <RegistrationForm proceed={() => { login(); enter() }} redirect={redirect} />
                </PageWithForm>
            );
        }}</AuthContext.Consumer>
    );
}

Registration.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};