import React from 'react';
import { Login } from './Login';
import { render } from '@testing-library/react';
import AuthContextProvider from '../../contexts/AuthContext';

describe('Login Page', () => {
    it(`renders login Form`, () => {
        const { getByLabelText } = render(<AuthContextProvider><Login /></AuthContextProvider>);

        expect(getByLabelText(`Email:`)).toHaveAttribute('name', 'login');
        expect(getByLabelText(`Пароль:`)).toHaveAttribute('name', 'password');
    });
});