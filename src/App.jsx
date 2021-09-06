import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import store from './store';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';
import { AppRoutes } from './common/app.routes';
import PageWrapper from './components/Struct/PageWrapper';
import PrivateRoute from './components/Struct/PrivateRoute';
import { StorageKeys, LocalStorageService } from './services';
import { authUser } from './store/actions';

import AuthHOC from './hocs/AuthHOC';

import './App.scss';

class App extends Component {
  subscriptions = [];
  localStorageService = new LocalStorageService();

  componentDidMount() {
    const { authContext } = this.props;
    const userData = this.localStorageService.fetch(StorageKeys.LOGIN_DATA);

    this.subscriptions.push(store.subscribe(() => {
      const { userData } = store.getState();
      authContext.login(userData.login, userData.password);
    }));

    if (userData) {
      store.dispatch(authUser(userData));
    }
  }

  componentWillUnmount() {
    this.subscriptions.forEach(unsubscribe => unsubscribe());
  }

  render() {
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
      </PageWrapper>
    );
  }
}

export default AuthHOC(App);