import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { NAV_TEST_ID } from '../Navigation/Navigation';
import { Header, HEADER_TEST_ID } from './Header';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Header Component', () => {
    const HeaderWithProviders = ({ isLoggedIn = false }) => (
        <MemoryRouter>
            <Provider store={store}>
                <Header isLoggedIn={isLoggedIn} />
            </Provider>
        </MemoryRouter>
    );

    it('should render as not logged in', () => {
        render(<HeaderWithProviders />);

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-not-auth')).toBeTruthy();
        expect(nav).toBeFalsy();
    });

    it('should render as logged in', () => {
        render(<HeaderWithProviders isLoggedIn={true} />);

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-not-auth')).toBeFalsy();
        expect(nav).toBeTruthy();
    });
});