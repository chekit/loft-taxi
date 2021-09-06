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
            this.localStorageService.save(StorageKeys.LOGIN_DATA, { login: email, password });

            this.setState({
                isLoggedIn: true
            });
        }
    };

    logout = () => {
        this.localStorageService.delete(StorageKeys.LOGIN_DATA);
        this.setState({
            isLoggedIn: false
        });
    };

    // @TODO: Refactor
    updateProfile = ({ name, card, exp, cvc }) => {
        this.localStorageService.save(StorageKeys.PROFILE_DATA, { name, card, exp, cvc });
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