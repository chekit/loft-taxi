import React from 'react';
import { Registration } from './Registration';
import { render } from '@testing-library/react';
import AuthContextProvider from '../../contexts/AuthContext';

describe('Registration Page', () => {
    it(`renders Registration Form`, () => {
        const { getByLabelText } = render(<AuthContextProvider><Registration /></AuthContextProvider>);

        expect(getByLabelText(`Email*:`)).toHaveAttribute('name', 'email');
        expect(getByLabelText(`Как вас зовут?*:`)).toHaveAttribute('name', 'name');
        expect(getByLabelText(`Придумайте пароль*:`)).toHaveAttribute('name', 'password');
    });

    it.todo('Test for form interaction');
});