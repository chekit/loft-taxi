import React, { Component } from 'react';

import './LoginForm.scss';

interface LoginFormProps {
    submitHandler: VoidFunction;
}

interface LoginFormState {
    login: string | undefined;
    password: string | undefined;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
    state = {
        login: undefined,
        password: undefined
    };

    onLoginChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            login: value
        });
    }

    onPasswordChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            password: value
        });
    }

    render() {
        const { submitHandler: submit } = this.props;
        const { login, password } = this.state;

        return (
            <form className="form" onSubmit={submit}>
                <h2 className="form__title">Войти</h2>
                <fieldset className="form__fieldset">
                    <label htmlFor="login" className="form__label">Email</label>
                    <input type="email" name="login" className="form__input" placeholder="mail@mail.ru" value={login} onChange={this.onLoginChange} />

                    <label htmlFor="password" className="form__label">Пароль</label>
                    <input type="password" name="password" className="form__input" placeholder="password" value={password} onChange={this.onPasswordChange} />
                </fieldset>
                <div className="form__recall">
                    <a href="#">Забыли пароль?</a>
                </div>
                <button type="submit" className="form__submit" disabled={!login || !password}>Войти</button>
                <div className="form__register">
                    <p>Новый пользователь? <a href="#" onClick={e => e.preventDefault()}>Регистрация</a></p>
                </div>
            </form>
        );
    }
}