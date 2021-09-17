import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Form, Field } from 'react-final-form';

import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { CardTypes } from '../../../common/models/card-types';
import { updateProfile, requestProfile } from '../../../store/profile';
import Card from './Card';

import './ProfileForm.scss';
import { AppRoutes } from '../../../common/app.routes';
import AppForm from '../../FormElements/AppForm';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';

export const PROFILE_FORM_TEST_ID = 'profile-form';
export const PROFILE_FORM_SUBHEADING_TEST_ID = 'profile-form-subheading';


export const ProfileForm = ({ history }) => {
    const [isFilled, setIsFilled] = useState(false);

    const dispatch = useDispatch();
    const store = useStore();
    const { profileData, isLoading, userData } = store.getState();
    const token = userData?.token;

    const cardType = CardTypes.MASTERCARD;

    useEffect(() => {
        if (!profileData) {
            requestProfile(token);
        }
    }, [profileData, token]);

    const validate = values => {
        const { cardNumber, cvc, expiryDate } = values;
        const errors = {};

        if (!cardNumber?.trim().match(/^\d{16}$/)) {
            errors.cardNumber = 'Wrong Card Num';
        }

        if (!cvc?.trim().match(/^\d{3}$/)) {
            errors.cvc = 'Wrong CVC';
        }

        if (!expiryDate?.trim().match(/^\d{2}\/\d{2}$/)) {
            errors.expiryDate = 'Wrong CVC';
        }

        return errors;
    };

    const onSubmit = ({ cardName, cardNumber, expiryDate, cvc }) => {
        dispatch(updateProfile({ cardName, cardNumber, expiryDate, cvc, token }));
        setIsFilled(true);
    };

    return (
        <Form onSubmit={onSubmit} validate={validate} initialValues={profileData}>{
            ({ handleSubmit, values, submitting, pristine }) => (

                <div className={classNames('profile', { 'is-center': isFilled })}>
                    <div className="profile__header">
                        <h1 className="profile__title">Профиль</h1>
                        <div className="profile__add-data add-data">
                            <p className="add-data__link link" data-testid={PROFILE_FORM_SUBHEADING_TEST_ID}>
                                {
                                    isFilled && !isLoading && !submitting
                                        ? <>Платёжные данные обновлены. Теперь вы можете заказывать такси.</>
                                        : <><span className="link__icon">&#12296;</span>Введите платежные данные</>
                                }
                            </p>
                        </div>
                    </div>
                    {
                        !isFilled && <>
                            <Card cardNum={(values.cardNumber || '').split(' ').join('')} cardType={cardType} expires={values.expiryDate} />

                            <AppForm classes={['profile__form', 'profile-form']} testId={PROFILE_FORM_TEST_ID}>
                                <Field name="cardName">{
                                    ({ input, meta }) => (
                                        <FormInput
                                            label="Имя владельца"
                                            name={input.name}
                                            placeholder="Vasiliy Vasiliev"
                                            isLight={true}
                                            value={input.value}
                                            onChangeHandler={input.onChange}
                                        />
                                    )
                                }</Field>
                                <Field name="cardNumber">{
                                    ({ input, meta }) => (
                                        <FormInput
                                            label="Номер карты"
                                            name={input.name}
                                            placeholder="1234567809874321"
                                            isLight={true}
                                            value={input.value}
                                            onChangeHandler={input.onChange}
                                            hasError={meta.dirty && !!meta.error}
                                            errorMessage="Формат карты указан неверно"
                                            maxlength={16} />

                                    )
                                }</Field>
                                <div className="profile-form__group">
                                    <Field name="expiryDate" parse={value => value.length >= 3 ? `${value.substr(0, 2)}/${value.replace('/', '').substr(2)}` : value}>{
                                        ({ input, meta }) => (
                                            <FormInput
                                                label="MM/YY"
                                                name={input.name}
                                                placeholder="MM/YY"
                                                maxlength={5}
                                                isLight={true}
                                                value={input.value}
                                                hasError={meta.dirty && !!meta.error}
                                                errorMessage="Срок действия карты казан неверно. Укажите MM/YY"
                                                onChangeHandler={input.onChange}
                                            />
                                        )
                                    }</Field>
                                    <Field name="cvc" parse={value => value.substr(0, 3)}>{
                                        ({ input, meta }) => (
                                            <FormInput
                                                label="CVC"
                                                name={input.name}
                                                type="number"
                                                maxlength={3}
                                                isLight={true}
                                                hasError={meta.dirty && !!meta.error}
                                                errorMessage="Формат CVC указан неверно"
                                                value={input.value}
                                                onChangeHandler={input.onChange}
                                            />
                                        )
                                    }</Field>
                                </div>
                            </AppForm>
                        </>
                    }
                    <div className="profile__footer">
                        {
                            isFilled && !isLoading && !submitting
                                ? <SubmitButton title="Перейти на карту" modificators={['is-dense']} onClickHandler={() => history.push(AppRoutes.ORDER)} />
                                : <SubmitButton title="Сохранить" modificators={['is-dense']} isDisabled={!values.cardName || !values.cardNumber || !values.expiryDate || !values.cvc || pristine} onClickHandler={handleSubmit} />
                        }
                    </div>
                </div>
            )
        }</Form>
    );
}