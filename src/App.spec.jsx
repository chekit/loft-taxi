import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

jest.mock('./pages/Login', () => (() => <p>Login Page</p>));

describe('App', () => {
    it(`renders Login Page first`, () => {
        render(<App />);

        const content = screen.getByText(/Login Page/i);
        expect(content).toBeInTheDocument();
    });
});