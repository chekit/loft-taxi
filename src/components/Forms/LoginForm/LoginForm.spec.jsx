import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { INPUT_TEST_ID } from '../../FormElements/Input/Input';
import { SUBMIT_TEST_ID } from '../../FormElements/SubmitButton/SubmitButton';
import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('Login Form', () => {
    const FormWithProvider = () => (
        <MemoryRouter>
            <Provider store={store}>
                <LoginForm />
            </Provider>
        </MemoryRouter>
    );

    it('should show submit button as disabled', () => {
        render(<FormWithProvider />);

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        expect(submit.disabled).toBeTruthy();
    });

    it('should show submit button as enabled', () => {
        render(<FormWithProvider />);

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        const inputs = screen.getAllByTestId(INPUT_TEST_ID);

        inputs.forEach(input => {
            switch (input.name) {
                case 'email':
                    fireEvent.change(input, { target: { value: 'email@mail.test' } });
                    break;
                case 'password':
                    fireEvent.change(input, { target: { value: 'pass' } })
                    break;
                default:
                    break;
            }
        });

        expect(submit.disabled).toBeFalsy();
    });

    it('should toggle disabled / enabled submit button state', () => {
        render(<FormWithProvider />);

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        const inputs = screen.getAllByTestId(INPUT_TEST_ID);

        expect(submit.disabled).toBeTruthy();

        inputs.forEach(input => {
            switch (input.name) {
                case 'email':
                    fireEvent.change(input, { target: { value: 'email@mail.test' } });
                    break;
                case 'password':
                    fireEvent.change(input, { target: { value: 'pass' } })
                    break;
                default:
                    break;
            }
        });

        expect(submit.disabled).toBeFalsy();

        fireEvent.change(inputs[1], { target: { value: '' } });

        expect(submit.disabled).toBeTruthy();
    });
});