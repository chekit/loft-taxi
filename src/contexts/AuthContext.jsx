import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isLoggedIn: false
    };

    login = ({login, password} = {}) => {
        this.setState({
            isLoggedIn: true
        });
    };

    logout = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        const { children } = this.props;

        return (
            // @TODO: Refactor global provider
            <AuthContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }}>
                {children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;