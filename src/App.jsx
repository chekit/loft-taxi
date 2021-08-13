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

  render() {
    const { currentPage } = this.state;

    return (
      <main className={currentPage === AppPages.LOGIN || currentPage === AppPages.REGISTRATION ? 'is-row' : ''}>
        <Header navigate={this.changePage} currentPage={currentPage} />
        <section>
          {
            {
              [AppPages.LOGIN]: <Login enter={this.redirectToApp} registration={this.redirectToRegistration} />,
              [AppPages.REGISTRATION]: <Registration enter={this.redirectToApp} login={this.redirectToLogin} />,
              [AppPages.MAP]: <Order />,
              [AppPages.PROFILE]: <Profile />,
            }[currentPage]
          }
        </section>
      </main>
    );
  }

  redirectToApp = () => {
    this.changePage(AppPages.MAP);
  }

  redirectToRegistration = () => {
    this.changePage(AppPages.REGISTRATION);
  }

  redirectToLogin = () => {
    this.changePage(AppPages.LOGIN);
  }

  changePage = (currentPage) => {
    this.setState({ currentPage });
  }
}

export default App;