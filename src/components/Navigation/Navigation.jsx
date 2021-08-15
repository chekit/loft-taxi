import React from 'react';
import { AppPages } from '../../common/models';

import './Navigation.scss';

// @TODO: Add logic for mobile devices
export const Navigation = ({ navigate, currentPage }) => (
    <nav>
        <ul>
            <li>
                <button onClick={() => navigate(AppPages.MAP)} className={currentPage === AppPages.MAP ? 'is-active': ''}>Карта</button>
            </li>
            <li>
                <button onClick={() => navigate(AppPages.PROFILE)} className={currentPage === AppPages.PROFILE ? 'is-active' : ''}>Профиль</button>
            </li>
            {currentPage !== AppPages.LOGIN && (
                <li>
                    <button onClick={() => navigate(AppPages.LOGIN)}>Выход</button>
                </li>
            )}
        </ul>
    </nav>
);