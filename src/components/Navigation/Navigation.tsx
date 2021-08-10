import React from 'react';
import { AppPages } from '../../common/models/app-pages.enum';

interface NavigationProps {
    navigate: (nextPage: AppPages) => void;
}

export const Navigation = ({ navigate }: NavigationProps) => (
    <nav>
        <ul>
            <li>
                <button onClick={() => navigate(AppPages.MAP)}>Map</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.PROFILE)}>Profile</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.REGISTRATION)}>Registration</button>

            </li>
            <li>
                <button onClick={() => navigate(AppPages.LOGIN)}>Logout</button>
            </li>
        </ul>
    </nav>
);