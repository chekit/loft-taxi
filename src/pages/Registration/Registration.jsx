import React from 'react';
import { Redirect } from 'react-router-dom';

import RegistrationForm from '../../components/Forms/RegistrationForm';
import PageWithForm from '../../components/Struct/PageWithForm';

import { AppRoutes } from '../../common/app.routes';
import { connect } from 'react-redux';

const Registration = props => {
    const { isLoggedIn } = props;

    return isLoggedIn
        ? <Redirect to={AppRoutes.ORDER} />
        : <PageWithForm><RegistrationForm /></PageWithForm>;
};

const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn
});

export default connect(mapStateToProps)(Registration);