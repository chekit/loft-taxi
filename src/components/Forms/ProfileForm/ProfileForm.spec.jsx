import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from '../../../common/app.routes';
import { PROFILE_FORM_SUBHEADING_TEST_ID, ProfileForm, PROFILE_FORM_TEST_ID } from './ProfileForm';
import { SUBMIT_TEST_ID } from '../../FormElements/SubmitButton/SubmitButton';
import { INPUT_TEST_ID } from '../../FormElements/Input/Input';

describe('Profile Form', () => {
    it(`should render empty form`, () => {
        render(<MemoryRouter initialEntries={[AppRoutes.PROFILE]}><ProfileForm /></MemoryRouter>);

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

    xit(`should enable saving`, () => {
        render(<MemoryRouter initialEntries={[AppRoutes.PROFILE]}><ProfileForm /></MemoryRouter>);

        const submit = screen.getByTestId(SUBMIT_TEST_ID);
        const inputs = screen.getAllByTestId(INPUT_TEST_ID);

        expect(submit).toBeTruthy();
        expect(submit.disabled).toBeTruthy();

        // @TODO: Form inputs should have patterns to check users input
        inputs.forEach(input => {
            switch (input.name) {
                case 'name':
                    fireEvent.change(input, { target: { value: 'Vasiliy Vasiliev' } });
                    break;
                case 'card_num':
                    fireEvent.change(input, { target: { value: '0000234567891234' } });
                    break;
                case 'expires':
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