import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from './Form';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { BTN_TEST_ID } from './SubmitButton/SubmitButton.spec';

describe('Form Component', () => {
    const FORM_TITLE = 'Form Title';

    it('should render with title', () => {
        render(<Form title={FORM_TITLE} />);
        const title = screen.getByTestId('form-title');

        expect(title.textContent).toBe(FORM_TITLE);
    });

    it('should render without title', () => {
        render(<Form />);
        const title = screen.queryByTestId('form-title');

        expect(title).toBeFalsy();
    });

    it('should render children', () => {
        render((<Form>
            <p data-testid="child">Child 1</p>
            <p data-testid="child">Child 2</p>
        </Form>));
        const children = screen.getAllByTestId('child');

        expect(children.length).toBe(2);
    });

    it('should call submit handler on submit click', () => {
        const handler = jest.fn();

        render((<Form title={FORM_TITLE} submitHandler={handler}>
            <SubmitButton title={'Submit'} />
        </Form>));

        const btn = screen.getByTestId(BTN_TEST_ID);

        fireEvent.click(btn);

        expect(handler).toHaveBeenCalled();
    });

    it('should call submit handler on submit event', () => {
        const handler = jest.fn();

        render(<Form title={FORM_TITLE} submitHandler={handler} />);
        const form = screen.getByTestId('form');

        fireEvent.submit(form);

        expect(handler).toHaveBeenCalled();
    });
});