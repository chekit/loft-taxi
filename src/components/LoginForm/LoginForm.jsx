import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import FormInput from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';

import './LoginForm.scss';


export class LoginForm extends PureComponent {
    static propTypes = {
        proceed: PropTypes.func,
        redirect: PropTypes.func
    };

    state = {
        email: '',
        password: ''
    };

    onRegisterClick = e => {
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
        const { email, password } = this.state;
        this.props.proceed(email, password);
    };

    render() {
        const { email, password } = this.state;

        return (
            <Form title="Войти" submitHandler={this.submitHandler}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="email" placeholder="mail@mail.ru" value={email} onChangeHandler={this.handleInputChange} />
                    <FormInput label="Пароль" type="password" name="password" placeholder="********" value={password} onChangeHandler={this.handleInputChange} />
                </fieldset>
                <div className="form__recall ">
                    {/* @TODO: Change to link */}
                    <span className="form__link" onClick={() => console.log('Recall pass')}>Забыли пароль?</span>
                </div>
                <SubmitButton title="Войти" isDisabled={!email || !password}></SubmitButton>
                <div className="form__register">
                    {/* @TODO: Change to link */}
                    <p>Новый пользователь? <span className="form__link" onClick={this.onRegisterClick}>Регистрация</span></p>
                </div>
            </Form>
        );
    }
}