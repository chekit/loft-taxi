import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormInput, INPUT_TEST_ID } from './Input';

describe('Input Component', () => {
    const LABEL_NAME = 'My label';
    const INPUT_PLACEHOLDER = 'My placceholder';

    describe('Input Element', () => {
        it(`should render Input component with default settings`, () => {
            render(<FormInput name={'test'} />);

            const input = screen.getByTestId(INPUT_TEST_ID);

            expect(input.type).toBe('text');
            expect(input.value).toBe('');
            expect(input.placeholder).toBe('');
            expect(input.isRequired).toBeFalsy();
            expect(input.isDisabled).toBeFalsy();
        });

        it(`should render Input component as email type`, () => {
            render(<FormInput name={'test'} type={'email'} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.type).toBe('email');
        });

        it(`should render Input component as password type`, () => {
            render(<FormInput name={'test'} type={'password'} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.type).toBe('password');
        });

        it(`should render Input component as required field`, () => {
            render(<FormInput name={'test'} isRequired={true} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.required).toBeTruthy();
        });

        it(`should render Input component as disabled`, () => {
            render(<FormInput name={'test'} isDisabled={true} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.disabled).toBeTruthy();
        });

        it(`should render Input id the same as name`, () => {
            render(<FormInput name={'test'} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.name).toBe(input.id);
        });


        it(`should set placeholder from props`, () => {
            render(<FormInput name={'test'} placeholder={INPUT_PLACEHOLDER} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            expect(input.placeholder).toBe(INPUT_PLACEHOLDER);
        });

        it(`should call onChange handler`, () => {
            const handler = jest.fn();

            render(<FormInput name={'test'} onChangeHandler={handler} />);

            const input = screen.getByTestId(INPUT_TEST_ID);
            fireEvent.change(input, { target: { value: '23' } });

            expect(handler).toHaveBeenCalled();
        });
    });

    describe('Label Element', () => {
        it(`shouldn't render label element by default`, () => {
            render(<FormInput name={'test'} />);

            const label = screen.queryByTestId('label');

            expect(label).toBeFalsy();
        });

        it(`shouldn render label element`, () => {
            render(<FormInput name={'test'} label={LABEL_NAME} />);

            const label = screen.getByTestId('label');

            expect(label).toBeTruthy();
            expect(label.textContent).toBe(`${LABEL_NAME}:`);
        });

        it('should add * to label name if input required', () => {
            render(<FormInput name={'test'} label={LABEL_NAME} isRequired={true} />);

            const label = screen.getByTestId('label');

            expect(label.textContent).toBe(`${LABEL_NAME}*:`);
        });
    });
});