import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../contexts/AuthContext';
import { PageWrapper, PAGE_WRAPPER_TEST_ID } from './PageWrapper';

describe('Page Wrapper', () => {
    it('should render as not logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: false }}>
                <PageWrapper />
            </AuthContext.Provider>
        ));

        const wrapper = screen.getByTestId(PAGE_WRAPPER_TEST_ID);

        expect(wrapper.classList.contains('is-row')).toBeTruthy();
    });

    it('should render as logged in', () => {
        render((
            <AuthContext.Provider value={{ isLoggedIn: true }}>
                <PageWrapper />
            </AuthContext.Provider>
        ));

        const wrapper = screen.getByTestId(PAGE_WRAPPER_TEST_ID);

        expect(wrapper.classList.contains('is-row')).toBeFalsy();
    });
})