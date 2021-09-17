import React from 'react';
import PropTypes from 'prop-types';
import { MCIcon } from 'loft-taxi-mui-theme';
import classNames from 'classnames';

import { CardTypes } from '../../../../common/models/card-types';
import app_logo from './../../../../assets/card/app-logo.svg';
import chip from './../../../../assets/card/chip.svg';

import './Card.scss';

export const CARD_DISPLAY_TEST_ID = 'card-display';
export const MASTERCARD_ICON_TEST_ID = 'mastercard-icon';

export const Card = ({ cardType, expires, cardNum }) => {
    return (
        <div className="card" data-testid={CARD_DISPLAY_TEST_ID}>
            <div className="card__header">
                <div className="card__logo">
                    <img src={app_logo} alt="Loft Taxi" data-testid="card-app-logo" />
                </div>
                <p className="card__expires">{expires}</p>
            </div>
            <div className="card__body">
                <p className="card__num card-num">
                    <span className="card-num__section">{cardNum.slice(0, 4)}</span>
                    <span className="card-num__section">{cardNum.slice(4, 8)}</span>
                    <span className="card-num__section">{cardNum.slice(8, 12)}</span>
                    <span className="card-num__section">{cardNum.slice(12, 16)}</span>
                </p>
            </div>
            <div className="card__footer">
                <div className="card__chip">
                    <img src={chip} alt="Chip" data-testid="card-chip-ico" />
                </div>
                <div className="card__vendor vendor-icons">
                    <div className={classNames('vendor-icons__item', { 'is-active': cardType === CardTypes.MASTERCARD })} data-testid={MASTERCARD_ICON_TEST_ID}>
                        <MCIcon classes={{ icon: `mc-icon` }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardType: PropTypes.string,
    expires: PropTypes.string,
    cardNum: PropTypes.string,
};

Card.defaultProps = {
    cardType: '',
    expires: '',
    cardNum: '',
};