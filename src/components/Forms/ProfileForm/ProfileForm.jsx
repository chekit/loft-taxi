import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

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
    const [formState, setFormState] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });
    const [isFilled, setIsFilled] = useState(false);

    const dispatch = useDispatch();
    const store = useStore();
    const { profileData, isLoading, userData } = store.getState();
    const token = userData?.token;

    const cardType = CardTypes.MASTERCARD;

    useEffect(() => {
        if (!profileData) {
            requestProfile(token);
        } else {
            if (!isFilled) {
                setFormState({
                    cardName: profileData.cardName,
                    cardNumber: profileData.cardNumber,
                    expiryDate: profileData.expiryDate,
                    cvc: profileData.cvc
                })
            }
        }
    }, [profileData, token, isFilled]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'cvc':
                return value.substr(0, 3);
            default:
                return value;
        }
    }

    const handleInputChange = e => {
        const { target: { name, value } } = e;

        setFormState({
            ...formState,
            [name]: validateInput(name, value)
        })
    };

    const submitHandler = () => {
        const { cardName, cardNumber, expiryDate, cvc } = formState;

        dispatch(updateProfile({ cardName, cardNumber, expiryDate, cvc, token }));
        setIsFilled(true);
    };

    return (
        <div className={classNames('profile', { 'is-center': isFilled })}>
            <div className="profile__header">
                <h1 className="profile__title">Профиль</h1>
                <div className="profile__add-data add-data">
                    <p className="add-data__link link" data-testid={PROFILE_FORM_SUBHEADING_TEST_ID}>
                        {
                            isFilled && !isLoading
                                ? <>Платёжные данные обновлены. Теперь вы можете заказывать такси.</>
                                : <><span className="link__icon">&#12296;</span>Введите платежные данные</>
                        }
                    </p>
                </div>
            </div>
            {
                !isFilled && <>
                    {/* @FIXME: Card Number editing too dummy */}
                    <Card cardNum={(formState.cardNumber || '').split(' ').join('')} cardType={cardType} expires={formState.expiryDate} />
                    <AppForm classes={['profile__form', 'profile-form']} testId={PROFILE_FORM_TEST_ID}>
                        <FormInput label="Имя владельца" name="cardName" placeholder="Vasiliy Vasiliev" isLight={true} value={formState.cardName} onChangeHandler={handleInputChange} />
                        <FormInput label="Номер карты" name="cardNumber" placeholder="1234567809874321" isLight={true} value={formState.cardNumber} maxlength={16} onChangeHandler={handleInputChange} />
                        <div className="profile-form__group">
                            <FormInput label="MM/YY" name="expiryDate" placeholder="MM/YY" maxlength={5} isLight={true} value={formState.expiryDate} onChangeHandler={handleInputChange} />
                            <FormInput label="CVC" name="cvc" type="number" maxlength={3} isLight={true} value={formState.cvc} onChangeHandler={handleInputChange} />
                        </div>
                    </AppForm>
                </>
            }
            <div className="profile__footer">
                {
                    isFilled && !isLoading
                        ? <SubmitButton title="Перейти на карту" modificators={['is-dense']} onClickHandler={() => history.push(AppRoutes.ORDER)} />
                        : <SubmitButton title="Сохранить" modificators={['is-dense']} isDisabled={!formState.cardName || !formState.cardNumber || !formState.expiryDate || !formState.cvc} onClickHandler={submitHandler} />
                }
            </div>
        </div>
    );
}