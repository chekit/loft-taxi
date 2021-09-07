import React from 'react';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';
import { LOGIN_FORM_TEST_ID, REGISTER_BUTTON_TEST_ID } from './components/Forms/LoginForm/LoginForm';
import { LOGIN_BUTTON_TEST_ID, REGISTRATION_FORM_TEST_ID } from './components/Forms/RegistrationForm/RegistrationForm';
import { INPUT_TEST_ID } from './components/FormElements/Input/Input';
import { SUBMIT_TEST_ID } from './components/FormElements/SubmitButton/SubmitButton';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './common/app.routes';
import { Provider } from 'react-redux';
import store from './store';

jest.mock('./components/Map', () => (() => <p>Mocked Map</p>));

describe('App', () => {
    const AppWithProvider = () => (
        <MemoryRouter initialEntries={[AppRoutes.MAIN]}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );

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

    // @TODO: Include after fix!
    it.todo('Add test for routing. See "Разбор заданий #3"');
    xit(`should load map page after login`, () => {
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