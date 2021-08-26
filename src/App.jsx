import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';

import AuthHOC from './hocs/AuthHOC';

import './App.scss';
import { AppRoutes } from './common/app.routes';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Header />
        <section>
          <Switch>
            <Route path={AppRoutes.MAIN} component={Login} exact></Route>
            <Route path={AppRoutes.REGISTRATION} component={Registration}></Route>
            <PrivateRoute path={AppRoutes.ORDER} redirectPath={AppRoutes.REGISTRATION}>
              <Order />
            </PrivateRoute>
            <PrivateRoute path={AppRoutes.PROFILE} redirectPath={AppRoutes.REGISTRATION}>
              <Profile />
            </PrivateRoute>
          </Switch>
        </section>
      </PageWrapper>
    );
  }
}

export default AuthHOC(App);