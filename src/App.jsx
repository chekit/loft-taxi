import React, { Component } from 'react';
import { AppPages } from './common/models';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';

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
    const mainContainerMod = currentPage === AppPages.LOGIN || currentPage === AppPages.REGISTRATION ? 'is-row' : '';

    return (
      <main className={mainContainerMod}>
        <Header navigate={this.changePage} currentPage={currentPage} showNavigation={currentPage !== AppPages.LOGIN && currentPage !== AppPages.REGISTRATION} />
        {/* @TODO: Add Layouts wrapper for Logged in and Guest users */}
        <section>{
          this.loadPage(currentPage)
        }</section>
      </main>
    );
  }
}

export default App;