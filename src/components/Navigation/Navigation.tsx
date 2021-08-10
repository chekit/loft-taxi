import React from 'react';
import { AppPages } from '../../common/models/app-pages.enum';

interface NavigationProps {
    navigate: (nextPage: AppPages) => void;
}

export const Navigation = ({ navigate }: NavigationProps) => (
    <nav>
        <ul>
            <li>
                <button onClick={() => navigate(AppPages.MAP)}>Карта</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.PROFILE)}>Профиль</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.REGISTRATION)}>Регистрация</button>

            </li>
            <li>
                <button onClick={() => navigate(AppPages.LOGIN)}>Выход</button>
            </li>
        </ul>
    </nav>
);