import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from '../../FormElements/Form';
import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { NavLink } from 'react-router-dom';

import './RegistrationForm.scss';
import { AppRoutes } from '../../../common/app.routes';

export const REGISTRATION_FORM_TEST_ID = 'registration-form';
export const LOGIN_BUTTON_TEST_ID = 'login-btn';

export class RegistrationForm extends PureComponent {
    static propTypes = {
        proceed: PropTypes.func,
    };

    state = {
        email: '',
        name: '',
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
        const { email, password/* , name */ } = this.state;
        const { proceed } = this.props;

       proceed(email, password);
    };

    render() {
        const { email, password, name } = this.state;

        return (
            <Form title="Регистрация" submitHandler={this.submitHandler} testId={REGISTRATION_FORM_TEST_ID}>
                <fieldset className="form__fieldset">
                    <FormInput label="Email" type="email" name="email" placeholder="mail@mail.ru" value={email} onChangeHandler={this.handleInputChange} isRequired={true} />
                    <FormInput label="Как вас зовут?" type="text" name="name" placeholder="Петр Александрович" value={name} onChangeHandler={this.handleInputChange} isRequired={true} />
                    <FormInput label="Придумайте пароль" type="password" name="password" placeholder="********" value={password} onChangeHandler={this.handleInputChange} isRequired={true} />
                </fieldset>
                <SubmitButton title="Зарегистрироваться" isDisabled={!email || !password || !name}></SubmitButton>
                <div className="form__register">
                    <p>Уже зарегестрированны? <NavLink className="form__link" to={AppRoutes.MAIN} data-testid={LOGIN_BUTTON_TEST_ID}>Войти</NavLink></p>
                </div>
            </Form>
        );
    }
}