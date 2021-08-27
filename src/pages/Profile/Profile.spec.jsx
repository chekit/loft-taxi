import React from 'react';
import { Profile } from './Profile';
import { render, screen } from '@testing-library/react';

describe('Profile Page', () => {
    it.todo('Add Full test coverage');
    it(`renders`, () => {
        render(<Profile />);
        const content = screen.getByText(/Профиль/i);
        expect(content).toBeInTheDocument();
    });
});