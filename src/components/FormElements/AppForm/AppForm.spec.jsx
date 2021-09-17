import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { DEFAULT_FORM_TEST_ID, AppForm, FORM_TITLE_TEST_ID } from './AppForm';
import { SUBMIT_TEST_ID, SubmitButton } from '../SubmitButton/SubmitButton';

describe('Form Component', () => {
    const FORM_TITLE = 'Form Title';

    it('should render with title', () => {
        render(<AppForm title={FORM_TITLE} />);
        const title = screen.getByTestId(FORM_TITLE_TEST_ID);

        expect(title.textContent).toBe(FORM_TITLE);
    });

    it('should render without title', () => {
        render(<AppForm />);
        const title = screen.queryByTestId(FORM_TITLE_TEST_ID);

        expect(title).toBeFalsy();
    });

    it('should render children', () => {
        render((<AppForm>
            <p data-testid="child">Child 1</p>
            <p data-testid="child">Child 2</p>
        </AppForm>));
        const children = screen.getAllByTestId('child');

        expect(children.length).toBe(2);
    });

    it('should call submit handler on submit click', () => {
        const handler = jest.fn(e => e.preventDefault());

        render((<AppForm title={FORM_TITLE} submitHandler={handler}>
            <SubmitButton title={'Submit'} />
        </AppForm>));

        const btn = screen.getByTestId(SUBMIT_TEST_ID);

        fireEvent.click(btn);

        expect(handler).toHaveBeenCalled();
    });

    it('should call submit handler on submit event', () => {
        const handler = jest.fn(e => e.preventDefault());

        render(<AppForm title={FORM_TITLE} submitHandler={handler} />);
        const form = screen.getByTestId(DEFAULT_FORM_TEST_ID);

        fireEvent.submit(form);

        expect(handler).toHaveBeenCalled();
    });

    it('should apply classes', () => {
        render(<AppForm title={FORM_TITLE} classes={['foo', 'bar']} />);
        const form = screen.getByTestId(DEFAULT_FORM_TEST_ID);

        expect(form.classList.contains('foo')).toBeTruthy();
        expect(form.classList.contains('bar')).toBeTruthy();
    })
});