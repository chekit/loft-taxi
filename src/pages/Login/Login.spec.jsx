import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './Login';
import { render } from '@testing-library/react';
import AuthContextProvider from '../../contexts/AuthContext';

describe('Login Page', () => {
    it(`renders login Form`, () => {
        const { getByLabelText } = render(<AuthContextProvider><MemoryRouter><Login /></MemoryRouter></AuthContextProvider>);

        expect(getByLabelText(`Email:`)).toHaveAttribute('name', 'email');
        expect(getByLabelText(`Пароль:`)).toHaveAttribute('name', 'password');
    });

    it.todo('Test for form interaction');
});