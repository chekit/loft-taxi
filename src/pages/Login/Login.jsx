import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppRoutes } from '../../common/app.routes';

import LoginForm from '../../components/Forms/LoginForm';
import PageWithForm from '../../components/Struct/PageWithForm';

const Login = props => {
    const { isLoggedIn } = props;

    return isLoggedIn
        ? <Redirect to={AppRoutes.ORDER} />
        : <PageWithForm><LoginForm /></PageWithForm>;
};

const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn
});

export default connect(mapStateToProps)(Login);