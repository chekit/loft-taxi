import React from 'react';
import { AppPages, NavigationBaseProps } from '../../common/models';

interface NavigationProps extends NavigationBaseProps { }

export const Navigation = ({ navigate, currentPage }: NavigationProps) => (
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
            {currentPage !== AppPages.LOGIN && (
                <li>
                    <button onClick={() => navigate(AppPages.LOGIN)}>Выход</button>
                </li>
            )}
        </ul>
    </nav>
);