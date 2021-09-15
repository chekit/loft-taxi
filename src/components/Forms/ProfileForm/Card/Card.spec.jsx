import { render, screen } from '@testing-library/react';
import { CardTypes } from '../../../../common/models/card-types';
import { MASTERCARD_ICON_TEST_ID, Card } from './Card';

describe('Card component', () => {
    it('should set mastercard as active', () => {
        render(<Card cardType={CardTypes.MASTERCARD} />);

        const card = screen.getByTestId(MASTERCARD_ICON_TEST_ID);

        expect(card.classList.contains('is-active')).toBeTruthy();
    });

    it(`shouldn't set mastercard as active`, () => {
        render(<Card cardType={''} />);

        const card = screen.getByTestId(MASTERCARD_ICON_TEST_ID);

        expect(card.classList.contains('is-active')).toBeFalsy();
    });
})