import React, { Component } from 'react';

import './LoginForm.scss';

export class LoginForm extends Component {
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

    onRegisterClick = (e) => {
        e.preventDefault();
        this.props.registrationRedirect();
    }

    render() {
        const { submitHandler } = this.props;
        const { login, password } = this.state;

        return (
            <form className="form" onSubmit={submitHandler}>
                <h2 className="form__title">Войти</h2>
                <fieldset className="form__fieldset">
                    <label htmlFor="login" className="form__label">Email</label>
                    <input type="email" name="login" className="form__input" placeholder="mail@mail.ru" value={login} onChange={this.onLoginChange} />

                    <label htmlFor="password" className="form__label">Пароль</label>
                    <input type="password" name="password" className="form__input" placeholder="password" value={password} onChange={this.onPasswordChange} />
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