import React, { Component } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

const RouterHOC = (WrappedComponent) => {
    return class extends Component {
        static displayName = 'RouterHOC';

        render() {
            return (
                <BrowserRouter>
                    <WrappedComponent {...this.props} />
                </BrowserRouter>
            );
        }
    }
};

const Nav = RouterHOC(Navigation);

fdescribe('Navigation', () => {
    const logout = jest.fn();

    it('should render', () => {
        render((
            <AuthContext.Provider value={{ logout, isLoggedIn: true }}>
                <Nav />
            </AuthContext.Provider>
        ));

        const links = document.querySelectorAll('.navigation__link');

        expect(links.length).toBe(3);
    });

    it('should render with Map link as active', () => {
        render((
            <AuthContext.Provider value={{ logout, isLoggedIn: true }}>
                <MemoryRouter initialEntries={['/order']}>
                    <Navigation />
                </MemoryRouter>
            </AuthContext.Provider>
        ));

        const MapLink = screen.getByText('Карта');

        expect(MapLink.classList.contains('is-active')).toBeTruthy();
    });

    xit('should call navigate with page enum value', () => {
        render((
            <AuthContext.Provider value={{ logout, isLoggedIn: true }}>
                <Nav />
            </AuthContext.Provider>
        ));

        const MapLink = screen.getByText('Карта');
        const ProfileLink = screen.getByText('Профиль');

        expect(MapLink.classList.contains('is-active')).toBeTruthy();

        fireEvent.click(ProfileLink);

        expect(ProfileLink.classList.contains('is-active')).toBeTruthy();
    });

    xit('should call logout and navigate to login', () => {
        render((
            <AuthContext.Provider value={{ logout, isLoggedIn: true }}>
                <Nav />
            </AuthContext.Provider>
        ));

        const Logout = screen.getByText('Выход');

        fireEvent.click(Logout);

        expect(logout).toHaveBeenCalled();
    });
});