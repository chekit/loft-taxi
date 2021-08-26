import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import FormInput from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import { NavLink } from 'react-router-dom';

import './LoginForm.scss';
import { AppRoutes } from '../../common/app.routes';

export const LOGIN_FORM_TEST_ID = 'login-form';
export const REGISTER_BUTTON_TEST_ID = 'register-btn';

export class LoginForm extends PureComponent {
    static propTypes = {
        proceed: PropTypes.func,
    };

    state = {
        email: '',
        password: ''
    };

    handleInputChange = e => {
        const { target: { name, value } } = e;

        this.setState({
            [name]: value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const { proceed } = this.props;

        proceed(email, password);
    };

    render() {
        const { email, password } = this.state;

        return (
            <Form title="Войти" submitHandler={this.submitHandler} testId={LOGIN_FORM_TEST_ID}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="email" placeholder="mail@mail.ru" value={email} onChangeHandler={this.handleInputChange} />
                    <FormInput label="Пароль" type="password" name="password" placeholder="********" value={password} onChangeHandler={this.handleInputChange} />
                </fieldset>
                <div className="form__recall ">
                    {/* @TODO: Change to recall page */}
                    <NavLink className="form__link" to={AppRoutes.REGISTRATION}>Забыли пароль?</NavLink>
                </div>
                <SubmitButton title="Войти" isDisabled={!email || !password}></SubmitButton>
                <div className="form__register">
                    <p>Новый пользователь? <NavLink className="form__link" to={AppRoutes.REGISTRATION} data-testid={REGISTER_BUTTON_TEST_ID}>Регистрация</NavLink></p>
                </div>
            </Form>
        );
    }
}