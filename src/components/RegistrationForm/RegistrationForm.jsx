import React, { Component } from 'react';
import Form from '../Form';
import FormInput from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

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
            <Form title="Регистрация" submitHandler={this.submitHandler}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="login" placeholder="mail@mail.ru" value={login} onChangeHandler={this.onLoginChange} isRequired="true" />
                    <FormInput label="Как вас зовут?" type="text" name="name" placeholder="Петр Александрович" value={name} onChangeHandler={this.onNameChange} isRequired="true" />
                    <FormInput label="Придумайте пароль" type="password" name="password" placeholder="password" value={password} onChangeHandler={this.onPasswordChange} isRequired="true" />
                </fieldset>
                <SubmitButton title="Зарегистрироваться" isDisabled={!login || !password || !name}></SubmitButton>
                <div className="form__register">
                    {/* @TODO: Change to link */}
                    <p>Уже зарегестрированны? <span className="form__link" onClick={this.onLoginClick}>Войти</span></p>
                </div>
            </Form>
        );
    }
}