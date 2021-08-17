import React from 'react';
import { Login } from './Login';
import { render } from '@testing-library/react';

describe('Login Page', () => {
    it(`renders login Form`, () => {
        const { getByLabelText } = render(<Login />);

        expect(getByLabelText(`Email:`)).toHaveAttribute('name', 'login');
        expect(getByLabelText(`Пароль:`)).toHaveAttribute('name', 'password');
    });
});