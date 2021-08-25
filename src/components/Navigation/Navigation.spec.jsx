import React, { Component } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppPages } from '../../common/models';
import { AuthContext } from '../../contexts/AuthContext';
import { LINK_TEST_ID, Navigation } from './Navigation';
import { BrowserRouter } from 'react-router-dom';

const RouterHOC = (WrappedComponent) => {
    return class extends Component {
        static displayName = 'RouterHOC';

        render() {
            return (
                <BrowserRouter>
                    <wrappedComponent {...this.props} />
                </BrowserRouter>
            );
        }
    }
};

const Nav = RouterHOC(Navigation);

xdescribe('Navigation', () => {
    const logout = jest.fn();

    it('should render', () => {
        render((
            <AuthContext.Provider value={{ logout }}>
                <Nav />
            </AuthContext.Provider>
        ));

        const links = screen.getAllByTestId(LINK_TEST_ID);

        expect(links.length).toBe(3);
    });

    it('should render with Map link as active', () => {
        render((
            <AuthContext.Provider value={{ logout }}>
                <Nav currentPage={AppPages.MAP} />
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
                <Nav currentPage={currentPage} navigate={navigate} />
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
                <Nav currentPage={currentPage} navigate={navigate} />
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