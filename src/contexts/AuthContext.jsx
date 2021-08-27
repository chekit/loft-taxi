import React, { Component, createContext } from 'react';
import { StorageKeys, LocalStorageService } from '../services';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    localStorageService = new LocalStorageService();

    state = {
        isLoggedIn: false
    };

    login = (email, password) => {
        // @TODO: Add Check up
        if (email && password) {
            this.localStorageService.save(StorageKeys.USER_DATA, { login: email, password });

            this.setState({
                isLoggedIn: true
            });
        }
    };

    logout = () => {
        this.localStorageService.delete(StorageKeys.USER_DATA);
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        const { children } = this.props;

        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;