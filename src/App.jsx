import React, { Component } from 'react';
import { AppPages } from './common/models';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';

import AuthHOC from './hocs/AuthHOC';

import './App.scss';

class App extends Component {
  state = {
    currentPage: AppPages.LOGIN
  };

  changePage = currentPage => {
    this.setState({ currentPage });
  };

  loadPage(pageType) {
    return ({
      [AppPages.LOGIN]: <Login enter={() => this.changePage(AppPages.MAP)} redirect={() => this.changePage(AppPages.REGISTRATION)} />,
      [AppPages.REGISTRATION]: <Registration enter={() => this.changePage(AppPages.MAP)} redirect={() => this.changePage(AppPages.LOGIN)} />,
      [AppPages.MAP]: <Order />,
      [AppPages.PROFILE]: <Profile />,
    }[pageType]);
  }

  render() {
    const { currentPage } = this.state;
    return (
      <PageWrapper currentPage={currentPage}>
        <Header currentPage={currentPage} showNavigation={currentPage !== AppPages.LOGIN && currentPage !== AppPages.REGISTRATION} />
        <section>
          <Switch>
            <Route path="/" render={() => <Login enter={() => this.changePage(AppPages.MAP)} redirect={() => this.changePage(AppPages.REGISTRATION)} />} exact></Route>
            <Route path="/registration" render={() => <Registration enter={() => this.changePage(AppPages.MAP)} redirect={() => this.changePage(AppPages.LOGIN)} />}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
        </section>
      </PageWrapper>
    );
  }
}

export default AuthHOC(App);