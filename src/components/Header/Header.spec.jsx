import { render, screen } from '@testing-library/react';
import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NAV_TEST_ID } from '../Navigation/Navigation';
import { Header, HEADER_TEST_ID } from './Header';

describe('Header Component', () => {
    it('should render as not logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: false }}>
                <Header />
            </AuthContext.Provider>
        ));

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-vertical')).toBeTruthy();
        expect(nav).toBeFalsy();
    });

    it('should render as logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: true }}>
                <Header />
            </AuthContext.Provider>
        ));

        const header = screen.getByTestId(HEADER_TEST_ID);
        const nav = screen.queryByTestId(NAV_TEST_ID);

        expect(header.classList.contains('is-vertical')).toBeFalsy();
        expect(nav).toBeTruthy();
    });
});