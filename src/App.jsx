import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './store';
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

import AuthHOC from './hocs/AuthHOC';

import './App.scss';
import { selectError, selectIsLoading, selectUserData } from './store/reducers';

class App extends Component {
  subscriptions = [];
  localStorageService = new LocalStorageService();

  componentDidMount() {
    const { authContext, authUserRequest } = this.props;
    const storedUserData = this.localStorageService.fetch(StorageKeys.LOGIN_DATA);

    this.subscriptions.push(store.subscribe(() => {
      const { userData, isLoading, error } = store.getState();

      if (!isLoading && !error && userData) {
        authContext.login(userData.email, userData.password);
      }
    }));

    if (storedUserData) {
      authUserRequest(storedUserData);
    }
  }

  componentWillUnmount() {
    this.subscriptions.forEach(unsubscribe => unsubscribe());
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
  isLoading: selectIsLoading(state),
  error: selectError(state),
  userData: selectUserData(state)
});

const mapDispatchToProps = { authUserRequest };

export default connect(mapStateToProps, mapDispatchToProps)(AuthHOC(App));