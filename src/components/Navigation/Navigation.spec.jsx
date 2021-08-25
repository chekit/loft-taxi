import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppPages } from '../../common/models';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigation } from './Navigation';
import { LINK_TEST_ID } from './NavigationLink/NavigationLink';

describe('Navigation', () => {
    const logout = jest.fn();

    it('should render', () => {
        render((
            <AuthContext.Provider value={{ logout }}>
                <Navigation />
            </AuthContext.Provider>
        ));

        const links = screen.getAllByTestId(LINK_TEST_ID);

        expect(links.length).toBe(3);
    });

    it('should render with Map link as active', () => {
        render((
            <AuthContext.Provider value={{ logout }}>
                <Navigation currentPage={AppPages.MAP} />
            </AuthContext.Provider>
        ));

        const [MapLink] = screen.getAllByTestId(LINK_TEST_ID);

        expect(MapLink.classList.contains('is-active')).toBeTruthy();
    });

    it('should call navigate with page enum value', () => {
        let currentPage = AppPages.MAP;
        const navigate = jest.fn(page => currentPage = page);

        render((
            <AuthContext.Provider value={{ logout }}>
                <Navigation currentPage={currentPage} navigate={navigate} />
            </AuthContext.Provider>
        ));

        const [MapLink, ProfileLink] = screen.getAllByTestId(LINK_TEST_ID);

        expect(MapLink.classList.contains('is-active')).toBeTruthy();

        fireEvent.click(ProfileLink);

        expect(navigate).toHaveBeenCalledWith(AppPages.PROFILE);
        expect(currentPage).toBe(AppPages.PROFILE);
    });

    it('should call logout and navigate to login', () => {
        let currentPage = AppPages.MAP;
        const navigate = jest.fn(page => currentPage = page);

        render((
            <AuthContext.Provider value={{ logout }}>
                <Navigation currentPage={currentPage} navigate={navigate} />
            </AuthContext.Provider>
        ));

        const links = screen.getAllByTestId(LINK_TEST_ID);
        const Logout = links[links.length - 1];

        fireEvent.click(Logout);

        expect(navigate).toHaveBeenCalledWith(AppPages.LOGIN);
        expect(currentPage).toBe(AppPages.LOGIN);
        expect(logout).toHaveBeenCalled();
    });
});