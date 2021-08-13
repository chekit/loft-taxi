import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';

export const Registration = ({ enter, login }) => (
    <div className="wrapper">
        <RegistrationForm submitHandler={enter} loginRedirect={login} />
    </div>
);