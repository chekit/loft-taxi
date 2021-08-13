import React, { Component } from 'react';

import './RegistrationForm.scss';

export class RegistrationForm extends Component {
    state = {
        login: undefined,
        password: undefined
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

    onLoginClick = (e) => {
        e.preventDefault();
        this.props.loginRedirect();
    }

    render() {
        const { submitHandler } = this.props;
        const { login, password } = this.state;

        return (
            <form className="form" onSubmit={submitHandler}>
                <h2 className="form__title">Регистрация</h2>
                <fieldset className="form__fieldset">
                    <label htmlFor="login" className="form__label">Email*</label>
                    <input type="email" name="login" className="form__input" placeholder="mail@mail.ru" value={login} onChange={this.onLoginChange} required />

                    <label htmlFor="name" className="form__label">Как вас зовут?*</label>
                    <input type="text" name="name" className="form__input" placeholder="Петр Александрович" value={password} onChange={this.onPasswordChange} required />

                    <label htmlFor="password" className="form__label">Придумайте пароль*</label>
                    <input type="password" name="password" className="form__input" placeholder="password" value={password} onChange={this.onPasswordChange} required />
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