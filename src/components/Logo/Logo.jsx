import React from 'react';
import logo_mobile from './../../assets/logo_mobile.svg';
import logo_desktop from './../../assets/logo_desktop.svg';
import logo_header_desktop from './../../assets/logo_header_desktop.svg';
import { AppPages } from '../../common/models';

export const Logo = ({ currentPage }) => {
    return (
        <picture className="logo">
            {
                currentPage === AppPages.LOGIN || currentPage === AppPages.REGISTRATION
                    ? <source media="(min-width:1024px)" srcSet={logo_desktop} />
                    : <source media="(min-width:1024px)" srcSet={logo_header_desktop} />
            }
            <img src={logo_mobile} alt="Loft Taxi" />
        </picture>
    );
}