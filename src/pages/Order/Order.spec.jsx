import React from 'react';
import { Order } from './Order';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/Map', () => (() => <p>Mocked Map</p>));

describe('Order Page', () => {
    it(`renders`, () => {
        render(<Order />);
        const content = screen.getByText(/Mocked Map/i);
        expect(content).toBeInTheDocument();
    });
});