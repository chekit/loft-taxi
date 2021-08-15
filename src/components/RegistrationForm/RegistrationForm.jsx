import React, { Component } from 'react';
import FormInput from '../Form/Input';

import './RegistrationForm.scss';

export class RegistrationForm extends Component {
    state = {
        login: '',
        name: '',
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

    onNameChange = ({ currentTarget: { value } }) => {
        this.setState({
            name: value
        });
    }

    onLoginClick = (e) => {
        e.preventDefault();
        this.props.redirect();
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.proceed();
    }

    render() {
        const { login, password, name } = this.state;

        return (
            <form className="form" onSubmit={this.submitHandler}>
                <h2 className="form__title">Регистрация</h2>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="login" placeholder="mail@mail.ru" value={login} onChangeHandler={this.onLoginChange} isRequired="true" />
                    <FormInput label="Как вас зовут?" type="text" name="name" placeholder="Петр Александрович" value={name} onChangeHandler={this.onNameChange} isRequired="true" />
                    <FormInput label="Придумайте пароль" type="password" name="password" placeholder="password" value={password} onChangeHandler={this.onPasswordChange} isRequired="true" />
                </fieldset>
                <button type="submit" className="form__submit" disabled={!login || !password}>Зарегистрироваться</button>
                <div className="form__register">
                    {/* @TODO: Change to link */}
                    <p>Уже зарегестрированны? <span className="form__link" onClick={this.onLoginClick}>Войти</span></p>
                </div>
            </form>
        );
    }
}