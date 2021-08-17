import React from 'react';
import { Registration } from './Registration';
import { render } from '@testing-library/react';

describe('Registration Page', () => {
    it(`renders Registration Form`, () => {
        const { getByLabelText } = render(<Registration />);

        expect(getByLabelText(`Email*:`)).toHaveAttribute('name', 'login');
        expect(getByLabelText(`Как вас зовут?*:`)).toHaveAttribute('name', 'name');
        expect(getByLabelText(`Придумайте пароль*:`)).toHaveAttribute('name', 'password');
    });
});