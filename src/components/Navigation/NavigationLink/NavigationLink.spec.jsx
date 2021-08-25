import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { LINK_TEST_ID, NavigationLink } from './NavigationLink';

const LINK_TITLE = 'Link';

describe('Navigation Link', () => {
    it('should render link as not active', () => {
        render(<NavigationLink title={LINK_TITLE} />);

        const link = screen.getByTestId(LINK_TEST_ID);

        expect(link.classList.contains('is-active')).toBeFalsy();
    });

    it('should render link as active', () => {
        render(<NavigationLink title={LINK_TITLE} isActive={true} />);

        const link = screen.getByTestId(LINK_TEST_ID);

        expect(link.classList.contains('is-active')).toBeTruthy();
    });

    it('should call click handler', () => {
        const handler = jest.fn();

        render(<NavigationLink title={LINK_TITLE} onClickHandler={handler} />);

        const link = screen.getByTestId(LINK_TEST_ID);

        fireEvent.click(link);

        expect(handler).toHaveBeenCalled();
    });

    it(`shouldn't call click handler if link active`, () => {
        const handler = jest.fn();

        render(<NavigationLink title={LINK_TITLE} isActive={true} onClickHandler={handler} />);

        const link = screen.getByTestId(LINK_TEST_ID);

        fireEvent.click(link);

        expect(handler).not.toHaveBeenCalled();
    });
});