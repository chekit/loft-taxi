import React, { Component } from 'react';
import { AppPages } from './common/models';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';

import './App.scss';

interface AppState {
  currentPage: AppPages;
}

class App extends Component<any, AppState> {
  state = {
    currentPage: AppPages.LOGIN
  };

  render() {
    const { currentPage } = this.state;

    return (
      <main className={currentPage === AppPages.LOGIN ? 'is-row' : ''}>
        <Header navigate={this.changePage} currentPage={currentPage} />
        <section>
          {
            {
              [AppPages.LOGIN]: <Login login={() => this.changePage(AppPages.MAP)} />,
              [AppPages.MAP]: <Order />,
              [AppPages.PROFILE]: <Profile />,
              [AppPages.REGISTRATION]: <Registration />,
            }[currentPage]
          }
        </section>
      </main>
    );
  }

  private changePage = (page: AppPages) => {
    this.setState({ currentPage: page });
  }
}

export default App;