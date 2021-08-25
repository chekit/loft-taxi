import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Theme
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import './index.scss';
import AuthContextProvider from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
