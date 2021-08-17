import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import PageWithForm from '../../components/PageWithForm';

import './Registration.scss';

export const Registration = ({ enter, redirect }) => (
    <PageWithForm>
        <RegistrationForm proceed={enter} redirect={redirect} />
    </PageWithForm>
);