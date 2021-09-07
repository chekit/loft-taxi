import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import AuthContextProvider from '../../contexts/AuthContext';
import store from '../../store';
import { Profile } from './Profile';

describe('Profile Page', () => {
    const PageWithProvider = () => (
        <AuthContextProvider>
            <MemoryRouter>
                <Provider store={store}>
                    <Profile />
                </Provider>
            </MemoryRouter>
        </AuthContextProvider>
    );

    it.todo('Add Full test coverage');
    it(`renders`, () => {
        render(<PageWithProvider />);
        const content = screen.getByText(/Профиль/i);
        expect(content).toBeInTheDocument();
    });
});