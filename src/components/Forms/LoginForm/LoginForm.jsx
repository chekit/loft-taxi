import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { useStore } from 'react-redux';

import { AppRoutes } from '../../../common/app.routes';
import { authUserRequest } from './../../../store/auth';

import AppForm from '../../FormElements/AppForm';
import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import Fieldset from '../../FormElements/Fieldset';
import Hint from '../../FormElements/Hint';
import { HintType } from '../../FormElements/Hint/Hint';

export const LOGIN_FORM_TEST_ID = 'login-form';
export const REGISTER_BUTTON_TEST_ID = 'register-btn';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const store = useStore();
    const { error } = store.getState();

    const onSubmit = ({ email, password }) => {
        dispatch(authUserRequest({ email, password }));
    };

    return (
        <Form onSubmit={onSubmit}>{
            ({ handleSubmit, values }) => (
                <AppForm title="Войти" submitHandler={handleSubmit} testId={LOGIN_FORM_TEST_ID}>
                    <Fieldset hint={() => error && <Hint type={HintType.ERROR} message="Данные для входа указаны неверно" />}>
                        <Field name="email">{
                            ({ input, meta }) => (
                                <FormInput
                                    label="Email"
                                    type="email"
                                    name={input.name}
                                    placeholder="mail@mail.ru"
                                    value={input.email}
                                    onChangeHandler={input.onChange}
                                    hasError={meta.dirty && !!error}
                                    isRequired={true}
                                />
                            )
                        }</Field>
                        <Field name="password">{
                            ({ input, meta }) => (
                                <FormInput
                                    label="Пароль"
                                    type="password"
                                    name={input.name}
                                    placeholder="********"
                                    value={input.password}
                                    onChangeHandler={input.onChange}
                                    hasError={(!!meta.error && meta.dirty) || (meta.dirty && !!error)}
                                    isRequired={true}
                                />
                            )
                        }</Field>
                    </Fieldset>
                    <div className="form__recall ">
                        {/* @TODO: Change to recall page */}
                        <NavLink className="form__link" to={AppRoutes.REGISTRATION}>Забыли пароль?</NavLink>
                    </div>
                    <SubmitButton title="Войти" isDisabled={!values.email || !values.password}></SubmitButton>
                    <div className="form__register">
                        <p>Новый пользователь? <NavLink className="form__link" to={AppRoutes.REGISTRATION} data-testid={REGISTER_BUTTON_TEST_ID}>Регистрация</NavLink></p>
                    </div>
                </AppForm>

            )
        }</Form>
    );

}
