import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Registration } from './Registration';
import { render } from '@testing-library/react';
import AuthContextProvider from '../../contexts/AuthContext';
import { AppRoutes } from '../../common/app.routes';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Registration Page', () => {
    const PageWithProvider = () => (
        <AuthContextProvider>
            <MemoryRouter initialEntries={[AppRoutes.REGISTRATION]}>
                <Provider store={store}>
                    <Registration />
                </Provider>
            </MemoryRouter>
        </AuthContextProvider>
    );

    it(`renders Registration Form`, () => {
        const { getByLabelText } = render(<PageWithProvider />);

        expect(getByLabelText(`Email*:`)).toHaveAttribute('name', 'email');
        expect(getByLabelText(`Как вас зовут?*:`)).toHaveAttribute('name', 'name');
        expect(getByLabelText(`Придумайте пароль*:`)).toHaveAttribute('name', 'password');
    });

    it.todo('Test for form interaction');
});