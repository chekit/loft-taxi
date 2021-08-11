import React from 'react';
import { AppPages, NavigationBaseProps } from '../../common/models';

import './Navigation.scss';

interface NavigationProps extends NavigationBaseProps { }

export const Navigation = ({ navigate, currentPage }: NavigationProps) => (
    <nav>
        <ul>
            <li>
                <button onClick={() => navigate(AppPages.MAP)} className={currentPage === AppPages.MAP ? 'is-active': ''}>Карта</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.PROFILE)} className={currentPage === AppPages.PROFILE ? 'is-active' : ''}>Профиль</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.REGISTRATION)} className={currentPage === AppPages.REGISTRATION ? 'is-active' : ''}>Регистрация</button>

            </li>
            {currentPage !== AppPages.LOGIN && (
                <li>
                    <button onClick={() => navigate(AppPages.LOGIN)}>Выход</button>
                </li>
            )}
        </ul>
    </nav>
);