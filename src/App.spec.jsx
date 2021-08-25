import React from 'react';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import { LOGIN_FORM_TEST_ID, REGISTER_BUTTON_TEST_ID } from './components/LoginForm/LoginForm';
import { LOGIN_BUTTON_TEST_ID, REGISTRATION_FORM_TEST_ID } from './components/RegistrationForm/RegistrationForm';
import { INPUT_TEST_ID } from './components/Form/Input/Input';
import { SUBMIT_TEST_ID } from './components/Form/SubmitButton/SubmitButton';
import AuthContextProvider from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

jest.mock('./components/Map', () => (() => <p>Mocked Map</p>));

xdescribe('App', () => {
    const AppWithProvider = () => (<AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>);

    it(`should render with login form`, () => {
        render(<AppWithProvider />);

        const loginForm = screen.getByTestId(LOGIN_FORM_TEST_ID);
        expect(loginForm).toBeTruthy();
    });

    it(`should switch to register form`, () => {
        render(<AppWithProvider />);

        let loginForm = screen.getByTestId(LOGIN_FORM_TEST_ID);
        const registerBtn = screen.getByTestId(REGISTER_BUTTON_TEST_ID);

        expect(loginForm).toBeTruthy();

        fireEvent.click(registerBtn);

        const registerForm = screen.getByTestId(REGISTRATION_FORM_TEST_ID);
        loginForm = screen.queryByTestId(LOGIN_FORM_TEST_ID);

        expect(registerForm).toBeTruthy();
        expect(loginForm).toBeFalsy();
    });

    it(`should switch to register and back to login form`, () => {
        render(<AppWithProvider />);

        const registerBtn = screen.getByTestId(REGISTER_BUTTON_TEST_ID);
        fireEvent.click(registerBtn);

        const registerForm = screen.getByTestId(REGISTRATION_FORM_TEST_ID);

        expect(registerForm).toBeTruthy();

        const loginBtn = screen.getByTestId(LOGIN_BUTTON_TEST_ID);
        fireEvent.click(loginBtn);

        const loginForm = screen.queryByTestId(LOGIN_FORM_TEST_ID);
        expect(loginForm).toBeTruthy();
    });

    it(`should load map page after login`, () => {
        render(<AppWithProvider />);

        const loginForm = screen.queryByTestId(LOGIN_FORM_TEST_ID);
        expect(loginForm).toBeTruthy();

        const inputs = screen.getAllByTestId(INPUT_TEST_ID);
        inputs.forEach(input => {
            switch (input.name) {
                case 'email':
                    fireEvent.change(input, { target: { value: 'email@mail.test' } });
                    break;
                case 'password':
                    fireEvent.change(input, { target: { value: 'pass' } })
                    break;
                default:
                    break;
            }
        });

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        fireEvent.click(submit);

        const content = screen.getByText(/Mocked Map/i);
        expect(content).toBeInTheDocument();
    });
});