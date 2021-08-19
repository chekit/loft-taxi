import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from '../../components/RegistrationForm';
import PageWithForm from '../../components/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Registration.scss';

export const Registration = ({ enter, redirect }) => {
    const { login } = useContext(AuthContext);

    return (
        <PageWithForm>
            <RegistrationForm proceed={(email, password) => { login(email, password); enter() }} redirect={redirect} />
        </PageWithForm>
    );
}

Registration.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};