import React, { PureComponent } from 'react';
import Form from '../../FormElements/Form';
import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { NavLink } from 'react-router-dom';

import './LoginForm.scss';
import { AppRoutes } from '../../../common/app.routes';
import { authUserRequest } from '../../../store/auth';
import { connect } from 'react-redux';

export const LOGIN_FORM_TEST_ID = 'login-form';
export const REGISTER_BUTTON_TEST_ID = 'register-btn';

class LoginForm extends PureComponent {
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
        const { authUserRequest } = this.props;

        authUserRequest({ email, password });
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

const mapStateToProps = state => state;
const mapDispatchToProps = { authUserRequest };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);