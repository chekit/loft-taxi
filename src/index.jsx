import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Theme
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
// Store
import { Provider } from 'react-redux';
import store from './store';

import AuthContextProvider from './contexts/AuthContext';
import App from './App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </AuthContextProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
