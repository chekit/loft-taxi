import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageWrapper, PAGE_WRAPPER_TEST_ID } from './PageWrapper';

describe('Page Wrapper', () => {
    it('should render as not logged in', () => {
        render((
            <PageWrapper isLoggedIn={true} />
        ));

        const wrapper = screen.getByTestId(PAGE_WRAPPER_TEST_ID);

        expect(wrapper.classList.contains('is-column')).toBeTruthy();
    });

    it('should render as logged in', () => {
        render((
            <PageWrapper isLoggedIn={false} />
        ));

        const wrapper = screen.getByTestId(PAGE_WRAPPER_TEST_ID);

        expect(wrapper.classList.contains('is-column')).toBeFalsy();
    });
})