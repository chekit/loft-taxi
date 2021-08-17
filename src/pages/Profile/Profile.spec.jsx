import React from 'react';
import { Profile } from './Profile';
import { render, screen } from '@testing-library/react';

describe('Profile Page', () => {
    it(`renders`, () => {
        render(<Profile />);
        const content = screen.getByText(/Profile Page/i);
        expect(content).toBeInTheDocument();
    });
});