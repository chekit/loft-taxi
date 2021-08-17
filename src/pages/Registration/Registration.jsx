import React from 'react';
import PropTypes from 'prop-types';

import RegistrationForm from '../../components/RegistrationForm';
import PageWithForm from '../../components/PageWithForm';

import './Registration.scss';

export const Registration = ({ enter, redirect }) => (
    <PageWithForm>
        <RegistrationForm proceed={enter} redirect={redirect} />
    </PageWithForm>
);

Registration.propTypes = {
    enter: PropTypes.func,
    redirect: PropTypes.func
};