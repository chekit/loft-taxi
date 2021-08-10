import React, { Component } from 'react';
import Navigation from './components/Navigation';

import './App.css';
import { AppPages } from './common/models/app-pages.enum';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Order from './pages/Order';
import Header from './components/Header';

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
      <>
        <Header navigate={this.changePage} />
        {
          {
            [AppPages.LOGIN]: <Login />,
            [AppPages.MAP]: <Order />,
            [AppPages.PROFILE]: <Profile />,
            [AppPages.REGISTRATION]: <Registration />,
          }[currentPage]
        }
      </>
    );
  }

  private changePage = (page: AppPages) => {
    this.setState({ currentPage: page });
  }
}

export default App;