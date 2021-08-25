import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SUBMIT_TEST_ID, SubmitButton } from './SubmitButton';

describe('Submit Button Component', () => {
    const SUBMIT_TITLE = 'Submit';

    it('should render button with defaults', () => {
        render(<SubmitButton title={SUBMIT_TITLE} />);
        const btn = screen.getByTestId(SUBMIT_TEST_ID);

        expect(btn).toBeTruthy();
        expect(btn.textContent).toBe(SUBMIT_TITLE);
    });

    it('should call click handler on click', () => {
        const handler = jest.fn();

        render(<SubmitButton title={SUBMIT_TITLE} onClickHandler={handler} />);
        const btn = screen.getByTestId(SUBMIT_TEST_ID);

        fireEvent.click(btn);

        expect(handler).toHaveBeenCalled();
    });

    it('should be rendered as disabled', () => {
        const handler = jest.fn();

        render(<SubmitButton title={SUBMIT_TITLE} onClickHandler={handler} isDisabled={true} />);
        const btn = screen.getByTestId(SUBMIT_TEST_ID);

        expect(btn.disabled).toBeTruthy();

        fireEvent.click(btn);
        expect(handler).not.toHaveBeenCalled();
    });
});