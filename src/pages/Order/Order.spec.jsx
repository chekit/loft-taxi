import React from 'react';
import { Order } from './Order';
import { render, screen } from '@testing-library/react';

describe('Order Page', () => {
    it(`renders`, () => {
        render(<Order />);
        const content = screen.getByText(/Map page/i);
        expect(content).toBeInTheDocument();
    });
});