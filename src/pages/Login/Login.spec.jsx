import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Login Page', () => {
    const PageWithProvider = () => (
        <MemoryRouter>
            <Provider store={store}>
                <Login />
            </Provider>
        </MemoryRouter>
    );

    it(`renders login Form`, () => {
        const { getByLabelText } = render(<PageWithProvider />);

        expect(getByLabelText(`Email*:`)).toHaveAttribute('name', 'email');
        expect(getByLabelText(`Пароль*:`)).toHaveAttribute('name', 'password');
    });

    it.todo('Test for form interaction');
});