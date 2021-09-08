import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUserRequest } from './store/auth';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';
import { AppRoutes } from './common/app.routes';
import PageWrapper from './components/Struct/PageWrapper';
import PrivateRoute from './components/Struct/PrivateRoute';
import Loader from './components/Loader';
import Error from './components/Error';
import { StorageKeys, LocalStorageService } from './services';

import './App.scss';

class App extends Component {
  subscriptions = [];
  localStorageService = new LocalStorageService();

  componentDidMount() {
    const { authUserRequest } = this.props;
    const storedUserData = this.localStorageService.fetch(StorageKeys.LOGIN_DATA);

    if (storedUserData) {
      authUserRequest(storedUserData);
    }
  }

  render() {
    const { isLoading, error, isLoggedIn } = this.props;

    return (
      <PageWrapper isLoggedIn={isLoggedIn}>
        <Header isLoggedIn={isLoggedIn} />
        <section>
          <Switch>
            <Route path={AppRoutes.MAIN} component={Login} exact></Route>
            <Route path={AppRoutes.REGISTRATION} component={Registration}></Route>
            <PrivateRoute path={AppRoutes.ORDER} redirectPath={AppRoutes.REGISTRATION} component={Order} />
            <PrivateRoute path={AppRoutes.PROFILE} redirectPath={AppRoutes.REGISTRATION} component={Profile} />
          </Switch>
        </section>
        {/* @TODO: Use Portal */}
        {isLoading ? <Loader /> : <></>}
        {/* @TODO: Use Portal */}
        {error ? <Error message={error} /> : <></>}
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  userData: state.userData,
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = { authUserRequest };

export default connect(mapStateToProps, mapDispatchToProps)(App);