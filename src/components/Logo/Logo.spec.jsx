import { render, screen } from '@testing-library/react';
import React from 'react';
import { Logo } from './Logo';

describe('Logo Component', () => {
    it('should render only mobile logo and unauth logo', () => {
        render(<Logo isLoggedIn={false} />);

        const mobileLogo = screen.queryByTestId('logo-mobile');
        const unauthLogo = screen.queryByTestId('logo-unauth');
        const authLogo = screen.queryByTestId('logo-auth');

        expect(mobileLogo).toBeTruthy();
        expect(unauthLogo).toBeTruthy();
        expect(authLogo).toBeFalsy();
    });

    it('should render only mobile logo and auth logo', () => {
        render(<Logo isLoggedIn={true} />);

        const mobileLogo = screen.queryByTestId('logo-mobile');
        const unauthLogo = screen.queryByTestId('logo-unauth');
        const authLogo = screen.queryByTestId('logo-auth');

        expect(mobileLogo).toBeTruthy();
        expect(unauthLogo).toBeFalsy();
        expect(authLogo).toBeTruthy();
    });
});