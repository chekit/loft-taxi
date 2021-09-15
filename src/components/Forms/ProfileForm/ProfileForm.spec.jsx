import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from '../../../common/app.routes';
import store from '../../../store';
import { INPUT_TEST_ID } from '../../FormElements/Input/Input';
import { SUBMIT_TEST_ID } from '../../FormElements/SubmitButton/SubmitButton';
import ProfileForm, { PROFILE_FORM_SUBHEADING_TEST_ID, PROFILE_FORM_TEST_ID } from './ProfileForm';

describe('Profile Form', () => {
    const FormWithProvider = () => (
        <MemoryRouter initialEntries={[AppRoutes.PROFILE]}>
            <Provider store={store}>
                <ProfileForm />
            </Provider>
        </MemoryRouter>
    );

    it(`should render empty form`, () => {
        render(<FormWithProvider />);

        const subheading = screen.getByTestId(PROFILE_FORM_SUBHEADING_TEST_ID);
        const form = screen.getByTestId(PROFILE_FORM_TEST_ID);
        const submit = screen.getByTestId(SUBMIT_TEST_ID);

        expect(subheading).toBeTruthy();
        expect(subheading.textContent).toContain(`Введите платежные данные`);
        expect(form).toBeTruthy();
        expect(submit).toBeTruthy();
        expect(submit.textContent).toContain(`Сохранить`);
        expect(submit.disabled).toBeTruthy();
    });

    it(`should enable saving`, () => {
        render(<FormWithProvider />);

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        const inputs = screen.getAllByTestId(INPUT_TEST_ID);

        expect(submit).toBeTruthy();
        expect(submit.disabled).toBeTruthy();

        inputs.forEach(input => {
            switch (input.name) {
                case 'cardName':
                    fireEvent.change(input, { target: { value: 'Vasiliy Vasiliev' } });
                    break;
                case 'cardNumber':
                    fireEvent.change(input, { target: { value: '0000234567891234' } });
                    break;
                case 'expiryDate':
                    fireEvent.change(input, { target: { value: '08/22' } });
                    break;
                case 'cvc':
                    fireEvent.change(input, { target: { value: `000` } });
                    break;
                default:
                    break;
            }
        });

        expect(submit.disabled).toBeFalsy();
    });
});