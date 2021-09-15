import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUserRequest } from './store/auth';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Header from './components/Header';
import { AppRoutes } from './common/app.routes';
import PageWrapper from './components/Struct/PageWrapper';
import PrivateRoute from './components/Struct/PrivateRoute';
import Loader from './components/Loader';
import Error from './components/Error';
import { StorageKeys, LocalStorageService } from './services';

import './App.scss';
import Order from './pages/Order';

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
    const { isLoading, error } = this.props;

    return (
      <PageWrapper>
        <Header />
        <section>
          <Switch>
            <Route path={AppRoutes.MAIN} component={Login} exact></Route>
            <Route path={AppRoutes.REGISTRATION} component={Registration}></Route>
            <PrivateRoute path={AppRoutes.ORDER} component={Order} />
            <PrivateRoute path={AppRoutes.PROFILE} component={Profile} />
            <Route component={Login} />
          </Switch>
        </section>
        {isLoading && <Loader />}
        {error && <Error message={error} />}
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