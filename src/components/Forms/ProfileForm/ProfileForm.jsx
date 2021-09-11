import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from '../../FormElements/Input';
import SubmitButton from '../../FormElements/SubmitButton';
import { CardTypes } from '../../../common/models/card-types';
import { updateProfileRequest } from '../../../store/profile';
import { LocalStorageService, StorageKeys } from '../../../services';
import Card from './Card';

import './ProfileForm.scss';
import { AppRoutes } from '../../../common/app.routes';

export const PROFILE_FORM_TEST_ID = 'profile-form';
export const PROFILE_FORM_SUBHEADING_TEST_ID = 'profile-form-subheading';

class ProfileForm extends PureComponent {
    static propTypes = {
        save: PropTypes.func
    };

    localStorageService = new LocalStorageService();

    cardType = CardTypes.MASTERCARD;

    state = {
        name: '',
        card: '',
        exp: '',
        cvc: '',
        isFilled: false
    };

    subscriptions = [];

    handleInputChange = e => {
        const { target: { name, value } } = e;

        this.setState({
            [name]: value
        });
    };

    submitHandler = () => {
        const { name, card, exp, cvc } = this.state;
        const { updateProfileRequest } = this.props;
        updateProfileRequest({ name, card, exp, cvc });

        this.setState({ isFilled: true });
    };

    componentDidMount() {
        const profileData = this.localStorageService.fetch(StorageKeys.PROFILE_DATA);

        if (profileData) {
            this.setState(prev => ({
                ...prev,
                ...profileData
            }));
        }
    }

    componentWillUnmount() {
        this.subscriptions.forEach(unsubscribe => unsubscribe());
    }

    render() {
        const { name, card, exp, cvc, isFilled } = this.state;
        const { history } = this.props;

        return (
            <div className={`profile ${isFilled && 'is-center'}`}>
                <div className="profile__header">
                    <h1 className="profile__title">Профиль</h1>
                    <div className="profile__add-data add-data">
                        <p className="add-data__link link" data-testid={PROFILE_FORM_SUBHEADING_TEST_ID}>
                            {
                                isFilled
                                    ? <>Платёжные данные обновлены. Теперь вы можете заказывать такси.</>
                                    : <><span className="link__icon">&#12296;</span>Введите платежные данные</>
                            }
                        </p>
                    </div>
                </div>
                {
                    !isFilled && <>
                        <Card cardNum={card} cardType={this.cardType} expires={exp} />
                        {/* Refactor with form component */}
                        <form className="profile__form profile-form" data-testid={PROFILE_FORM_TEST_ID}>
                            <FormInput label="Имя владельца" name="name" placeholder="Vasiliy Vasiliev" isLight={true} value={name} />
                            <FormInput label="Номер карты" name="card" placeholder="1234567809874321" isLight={true} value={card} maxlength={16} />
                            <div className="profile-form__group">
                                <FormInput label="MM/YY" name="exp" placeholder="08/21" isLight={true} value={exp} />
                                <FormInput label="CVC" name="cvc" type="number" maxlength={3} isLight={true} value={cvc} />
                            </div>
                        </form>
                    </>
                }
                <div className="profile__footer">
                    {
                        isFilled
                            ? <SubmitButton title="Перейти на карту" modificators={['is-dense']} onClickHandler={() => history.push(AppRoutes.ORDER)} />
                            : <>
                                <SubmitButton title="Сохранить" modificators={['is-dense']} isDisabled={!name || !card || !exp || !cvc} onClickHandler={this.submitHandler} />
                            </>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { updateProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);