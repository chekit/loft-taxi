import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { CardTypes } from '../../../common/models/card-types';
import { updateProfileRequest, getProfileRequest } from '../../../store/profile';
import { LocalStorageService } from '../../../services';
import Card from './Card';

import './ProfileForm.scss';
import { AppRoutes } from '../../../common/app.routes';
import Form from '../../FormElements/Form';

export const PROFILE_FORM_TEST_ID = 'profile-form';
export const PROFILE_FORM_SUBHEADING_TEST_ID = 'profile-form-subheading';

class ProfileForm extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        // Default state is EMPTY
        if (!state.cardName && !state.cardNumber && !state.expiryDate && !state.cvc) {
            return {
                ...state,
                cardName: props.cardName,
                cardNumber: props.cardNumber,
                expiryDate: props.expiryDate,
                cvc: props.cvc
            }
        }

        return null;
    }

    static propTypes = {
        save: PropTypes.func
    };

    localStorageService = new LocalStorageService();

    cardType = CardTypes.MASTERCARD;

    state = {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        isFilled: false
    };

    handleInputChange = e => {
        const { target: { name, value } } = e;

        // @FIXME: Too specific?
        this.setState({
            [name]: name === 'cvc' ? value.substr(0, 3) : value
        });
    };

    submitHandler = () => {
        const { cardName, cardNumber, expiryDate, cvc } = this.state;
        const { updateProfileRequest, token } = this.props;
        updateProfileRequest({ cardName, cardNumber, expiryDate, cvc, token });

        this.setState({ isFilled: true });
    };

    componentDidMount() {
        const { getProfileRequest, token } = this.props;
        getProfileRequest(token);
    }

    render() {
        const { cardName, cardNumber, expiryDate, cvc, isFilled } = this.state;
        const { history, isLoading } = this.props;

        return (
            <div className={`profile ${isFilled ? 'is-center' : ''}`}>
                <div className="profile__header">
                    <h1 className="profile__title">Профиль</h1>
                    <div className="profile__add-data add-data">
                        <p className="add-data__link link" data-testid={PROFILE_FORM_SUBHEADING_TEST_ID}>
                            {
                                isFilled && !isLoading
                                    ? <>Платёжные данные обновлены. Теперь вы можете заказывать такси.</>
                                    : !isLoading && <><span className="link__icon">&#12296;</span>Введите платежные данные</>
                            }
                        </p>
                    </div>
                </div>
                {
                    !isFilled && <>
                        {/* @FIXME: Card Number editing too dummy */}
                        <Card cardNum={(cardNumber || '').split(' ').join('')} cardType={this.cardType} expires={expiryDate} />
                        <Form classes={['profile__form', 'profile-form']} testId={PROFILE_FORM_TEST_ID}>
                            <FormInput label="Имя владельца" name="cardName" placeholder="Vasiliy Vasiliev" isLight={true} value={cardName} onChangeHandler={this.handleInputChange} />
                            <FormInput label="Номер карты" name="cardNumber" placeholder="1234567809874321" isLight={true} value={cardNumber} maxlength={16} onChangeHandler={this.handleInputChange} />
                            <div className="profile-form__group">
                                <FormInput label="MM/YY" name="expiryDate" placeholder="MM/YY" maxlength={5} isLight={true} value={expiryDate} onChangeHandler={this.handleInputChange} />
                                <FormInput label="CVC" name="cvc" type="number" maxlength={3} isLight={true} value={cvc} onChangeHandler={this.handleInputChange} />
                            </div>
                        </Form>
                    </>
                }
                <div className="profile__footer">
                    {
                        isFilled && !isLoading
                            ? <SubmitButton title="Перейти на карту" modificators={['is-dense']} onClickHandler={() => history.push(AppRoutes.ORDER)} />
                            : <SubmitButton title="Сохранить" modificators={['is-dense']} isDisabled={!cardName || !cardNumber || !expiryDate || !cvc} onClickHandler={this.submitHandler} />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ profileData, isLoading, userData: { token } }) => ({
    ...profileData,
    token,
    isLoading
});
const mapDispatchToProps = { updateProfileRequest, getProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);