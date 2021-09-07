import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { AppRoutes } from '../../common/app.routes';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Navigation', () => {
    const NavWithProviders = ({ route = AppRoutes.ORDER }) => (
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store}>
                <Navigation />
            </Provider>
        </MemoryRouter>
    );

    beforeEach(() => {
        render(<NavWithProviders />);
    })

    it('should render', () => {
        const links = document.querySelectorAll('.navigation__link');

        expect(links.length).toBe(3);
    });

    it('should render with Map link as active', () => {
        const MapLink = screen.getByText('Карта');

        expect(MapLink.classList.contains('is-active')).toBeTruthy();
    });

    it('should set profile link as active', () => {
        const MapLink = screen.getByText('Карта');
        const ProfileLink = screen.getByText('Профиль');

        expect(MapLink.classList.contains('is-active')).toBeTruthy();

        fireEvent.click(ProfileLink);

        expect(ProfileLink.classList.contains('is-active')).toBeTruthy();
    });

    // @TODO: Refactor
    xit('should call logout and navigate to login', () => {
        const Logout = screen.getByText('Выход');

        fireEvent.click(Logout);
    });
});