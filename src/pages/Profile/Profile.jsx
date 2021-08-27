import React from 'react';
import { MCIcon } from 'loft-taxi-mui-theme';

import FormInput from '../../components/Form/Input';
import SubmitButton from '../../components/Form/SubmitButton';
import PageWithForm from '../../components/PageWithForm';

import app_logo from './../../assets/card/app-logo.svg';
import chip from './../../assets/card/chip.svg';
import './Profile.scss';

export const CardTypes = {
    MASTERCARD: 'mc'
}

export const Profile = () => {
    const cardType = CardTypes.MASTERCARD;

    return (
        <PageWithForm isFadeout={true}>
            <div className="profile">
                <div className="profile__header">
                    <h1 className="profile__title">Профиль</h1>
                    <div className="profile__add-data add-data">
                        <p className="add-data__link link">
                            <span className="link__icon">&#12296;</span>
                            Введите платежные данные
                        </p>
                    </div>
                </div>
                <div className="cc-display">
                    <div className="cc-display__header">
                        <div className="cc-display__logo">
                            <img src={app_logo} alt="Loft Taxi" data-testid="card-app-logo" />
                        </div>
                        <p className="cc-display__expires">
                            05/08
                        </p>
                    </div>
                    <div className="cc-display__body">
                        <p className="cc-display__num card-num">
                            <span className="card-num__section">5545</span>
                            <span className="card-num__section">2300</span>
                            <span className="card-num__section">3432</span>
                            <span className="card-num__section">4521</span>
                        </p>
                    </div>
                    <div className="cc-display__footer">
                        <div className="cc-display__chip">
                            <img src={chip} alt="Chip" data-testid="card-chip-ico" />
                        </div>
                        <div className="cc-display__vendor vendor-icons">
                            <div className={`vendor-icons__item ${cardType === CardTypes.MASTERCARD ? 'is-active' : ''}`}>
                                <MCIcon classes={{ icon: `mc-icon` }} />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="profile__form profile-form">
                    <FormInput label="Имя владельца" name="name" isLight={true} />
                    <FormInput label="Номер карты" name="card_num" isLight={true} />
                    <div className="profile-form__group">
                        <FormInput label="MM/YY" name="expires" isLight={true} />
                        <FormInput label="CVC" name="cvc" type="number" maxlength={3} isLight={true} />
                    </div>
                </form>
                <div className="profile__footer">
                    <SubmitButton title="Сохранить" modificators={['is-dense']}></SubmitButton>
                </div>
            </div>
        </PageWithForm>
    );
}