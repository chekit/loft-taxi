import { render, screen } from '@testing-library/react';
import Fieldset, { FieldsetOrientation } from '.';
import { FIELDSET_TEST_ID } from './Fieldset';

describe('Form Fieldset', () => {
    it('should render as horizontal', () => {
        render(<Fieldset type={FieldsetOrientation.HORIZONTAL} />);
        const fieldset = screen.getByTestId(FIELDSET_TEST_ID);

        expect(fieldset.classList.contains(FieldsetOrientation.HORIZONTAL)).toBeTruthy();
    });
});