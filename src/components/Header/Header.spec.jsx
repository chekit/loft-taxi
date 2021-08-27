import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../contexts/AuthContext';
import { NAV_TEST_ID } from '../Navigation/Navigation';
import { Header, HEADER_TEST_ID } from './Header';

describe('Header Component', () => {
    it('should render as not logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: false }}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </AuthContext.Provider>
        ));

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-not-auth')).toBeTruthy();
        expect(nav).toBeFalsy();
    });

    it('should render as logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: true }}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </AuthContext.Provider>
        ));

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-not-auth')).toBeFalsy();
        expect(nav).toBeTruthy();
    });
});