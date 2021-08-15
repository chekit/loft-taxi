import React, { Component } from 'react';
import Form from '../Form';
import FormInput from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

import './LoginForm.scss';

export class LoginForm extends Component {
    state = {
        login: '',
        password: ''
    };

    onLoginChange = ({ currentTarget: { value } }) => {
        this.setState({
            login: value
        });
    }

    onPasswordChange = ({ currentTarget: { value } }) => {
        this.setState({
            password: value
        });
    }

    onRegisterClick = e => {
        e.preventDefault();
        this.props.redirect();
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.proceed();
    }

    render() {
        const { login, password } = this.state;

        return (
            <Form title="Войти" submitHandler={this.submitHandler}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="login" placeholder="mail@mail.ru" value={login} onChangeHandler={this.onLoginChange} />
                    <FormInput label="Пароль" type="password" name="password" placeholder="password" value={password} onChangeHandler={this.onPasswordChange} />
                </fieldset>
                <div className="form__recall ">
                    {/* @TODO: Change to link */}
                    <span className="form__link" onClick={() => console.log('Recall pass')}>Забыли пароль?</span>
                </div>
                <SubmitButton title="Войти" isDisabled={!login || !password}></SubmitButton>
                <div className="form__register">
                    {/* @TODO: Change to link */}
                    <p>Новый пользователь? <span className="form__link" onClick={this.onRegisterClick}>Регистрация</span></p>
                </div>
            </Form>
        );
    }
}