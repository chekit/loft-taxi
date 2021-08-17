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

    onLoginClick = e => {
        e.preventDefault();
        this.props.redirect();
    };

    handleInputChange = e => {
        const { target: { name, value } } = e;

        this.setState({
            [name]: value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.proceed();
    };

    render() {
        const { login, password, name } = this.state;

        return (
            <Form title="Регистрация" submitHandler={this.submitHandler}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="login" placeholder="mail@mail.ru" value={login} onChangeHandler={this.handleInputChange} isRequired={true} />
                    <FormInput label="Как вас зовут?" type="text" name="name" placeholder="Петр Александрович" value={name} onChangeHandler={this.handleInputChange} isRequired={true} />
                    <FormInput label="Придумайте пароль" type="password" name="password" placeholder="password" value={password} onChangeHandler={this.handleInputChange} isRequired={true} />
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