import React, { useEffect } from 'react';
import AppForm from '../../FormElements/AppForm';
import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import './RegistrationForm.scss';
import { AppRoutes } from '../../../common/app.routes';
import { registerUserRequest } from '../../../store/register';
import { resetErrorRequest } from '../../../store/error';
import { useDispatch, useStore } from 'react-redux';
import Fieldset from '../../FormElements/Fieldset';
import Hint from '../../FormElements/Hint';
import { HintType } from '../../FormElements/Hint/Hint';

export const REGISTRATION_FORM_TEST_ID = 'registration-form';
export const LOGIN_BUTTON_TEST_ID = 'login-btn';


export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const store = useStore();
    const { error } = store.getState();

    useEffect(() => {
        dispatch(resetErrorRequest());
    })

    const onSubmit = ({ email, password, userName }) => {
        const [name, surname] = userName.trim().split(' ');

        dispatch(registerUserRequest({
            email,
            password,
            name,
            surname
        }));
    };

    const validate = values => {
        const errors = {};

        // Dummy check for User Name
        if (values.userName?.trim().split(' ').length < 2 || values.userName?.trim().split(' ').some(name => name.length < 1)) {
            errors.userName = 'Wrong name';
        }

        return errors;
    }

    return (
        <Form onSubmit={onSubmit} validate={validate}>{
            ({ handleSubmit, values }) => (
                <AppForm title="Регистрация" submitHandler={handleSubmit} testId={REGISTRATION_FORM_TEST_ID}>
                    <Fieldset hint={() => error && <Hint type={HintType.ERROR} message="Данные для регистрации указаны неверно" />}>
                        <Field name="email">{
                            ({ input, meta }) => (
                                <FormInput
                                    label="Email"
                                    type="email"
                                    name={input.name}
                                    placeholder="mail@mail.ru"
                                    value={input.email}
                                    onChangeHandler={input.onChange}
                                    hasError={meta.dirty && !!meta.error}
                                    autocomplete="off"
                                    isRequired={true}
                                />
                            )
                        }</Field>
                        <Field name="userName">{
                            ({ input, meta }) => (
                                <FormInput
                                    label="Как вас зовут?"
                                    name={input.name}
                                    placeholder="Петр Александрович"
                                    value={input.userName}
                                    onChangeHandler={input.onChange}
                                    hasError={meta.dirty && !!meta.error}
                                    errorMessage="Неверный формат имени. Укажите 'Имя Фмилия'"
                                    autocomplete="off"
                                    isRequired={true}
                                />
                            )
                        }</Field>
                        <Field name="password">{
                            ({ input, meta }) => (
                                <FormInput
                                    label="Придумайте пароль"
                                    type="password"
                                    name={input.name}
                                    placeholder="********"
                                    value={input.password}
                                    onChangeHandler={input.onChange}
                                    hasError={meta.dirty && !!meta.error}
                                    autocomplete="off"
                                    isRequired={true}
                                />
                            )
                        }</Field>
                    </Fieldset>
                    <SubmitButton title="Зарегистрироваться" isDisabled={!values.email || !values.password || !values.userName}></SubmitButton>
                    <div className="form__register">
                        <p>Уже зарегестрированны? <NavLink className="form__link" to={AppRoutes.MAIN} data-testid={LOGIN_BUTTON_TEST_ID}>Войти</NavLink></p>
                    </div>
                </AppForm>
            )
        }</Form>
    );
};