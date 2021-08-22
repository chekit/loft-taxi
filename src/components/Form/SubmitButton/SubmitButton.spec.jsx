import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BTN_TEST_ID, SubmitButton } from './SubmitButton';

describe('Submit Button Component', () => {
    const BTN_TITLE = 'Submit';

    it('should render button with defaults', () => {
        render(<SubmitButton title={BTN_TITLE} />);
        const btn = screen.getByTestId(BTN_TEST_ID);

        expect(btn).toBeTruthy();
        expect(btn.textContent).toBe(BTN_TITLE);
    });

    it('should call click handler on click', () => {
        const handler = jest.fn();

        render(<SubmitButton title={BTN_TITLE} onClickHandler={handler} />);
        const btn = screen.getByTestId(BTN_TEST_ID);

        fireEvent.click(btn);

        expect(handler).toHaveBeenCalled();
    });

    it('should be rendered as disabled', () => {
        const handler = jest.fn();

        render(<SubmitButton title={BTN_TITLE} onClickHandler={handler} isDisabled={true} />);
        const btn = screen.getByTestId(BTN_TEST_ID);

        expect(btn.disabled).toBeTruthy();

        fireEvent.click(btn);
        expect(handler).not.toHaveBeenCalled();
    });
});