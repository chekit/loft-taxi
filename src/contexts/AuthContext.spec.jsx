import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AuthContextProvider, { AuthContext } from './AuthContext';

describe('AuthContext', () => {
    it('should render as not Logged In by default', () => {
        let isLoggedIn;

        render(<AuthContextProvider>
            <AuthContext.Consumer>{context => {
                isLoggedIn = context.isLoggedIn;
                return null;
            }}</AuthContext.Consumer>
        </AuthContextProvider>);

        expect(isLoggedIn).toBe(false);
    });

    it('should LogIn', () => {
        let isLoggedIn;
        let login;

        render(<AuthContextProvider>
            <AuthContext.Consumer>{context => {
                isLoggedIn = context.isLoggedIn;
                login = context.login;
                return null;
            }}</AuthContext.Consumer>
        </AuthContextProvider>);

        expect(isLoggedIn).toBe(false);
        act(() => login());

        expect(isLoggedIn).toBe(true);
    });

    it('should LogOut', () => {
        let isLoggedIn;
        let login;
        let logout;

        render(<AuthContextProvider>
            <AuthContext.Consumer>{context => {
                isLoggedIn = context.isLoggedIn;
                login = context.login;
                logout = context.logout;
                return null;
            }}</AuthContext.Consumer>
        </AuthContextProvider>);

        expect(isLoggedIn).toBe(false);
        act(() => login());

        expect(isLoggedIn).toBe(true);

        act(() => logout());

        expect(isLoggedIn).toBe(false);
    });
});