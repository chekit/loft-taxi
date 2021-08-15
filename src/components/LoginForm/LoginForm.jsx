import React, { Component } from 'react';
import FormInput from '../Form/Input';

import './LoginForm.scss';

export class LoginForm extends Component {
    state = {
        login: ''   ,
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
            <form className="form" onSubmit={this.submitHandler}>
                <h2 className="form__title">Войти</h2>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="login" placeholder="mail@mail.ru" value={login} onChangeHandler={this.onLoginChange} />
                    <FormInput label="Пароль" type="password" name="password" placeholder="password" value={password} onChangeHandler={this.onPasswordChange} />
                </fieldset>
                <div className="form__recall ">
                    {/* @TODO: Change to link */}
                    <span className="form__link" onClick={() => console.log('Recall pass')}>Забыли пароль?</span>
                </div>
                <button type="submit" className="form__submit" disabled={!login || !password}>Войти</button>
                <div className="form__register">
                    {/* @TODO: Change to link */}
                    <p>Новый пользователь? <span className="form__link" onClick={this.onRegisterClick}>Регистрация</span></p>
                </div>
            </form>
        );
    }
}