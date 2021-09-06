import React from 'react';
import { Profile } from './Profile';
import { render, screen } from '@testing-library/react';
import AuthContextProvider from '../../contexts/AuthContext';

describe('Profile Page', () => {
    it.todo('Add Full test coverage');
    it(`renders`, () => {
        render(<AuthContextProvider><Profile /></AuthContextProvider>);
        const content = screen.getByText(/Профиль/i);
        expect(content).toBeInTheDocument();
    });
});