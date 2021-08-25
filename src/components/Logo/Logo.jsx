import React from 'react';
import PropTypes from 'prop-types';

import logo_mobile from './../../assets/logo_mobile.svg';
import logo_desktop from './../../assets/logo_desktop.svg';
import logo_header_desktop from './../../assets/logo_header_desktop.svg';
import { AppPages } from '../../common/models';

export const Logo = ({ currentPage }) => {
    return (
        <picture className="logo">
            {
                currentPage === AppPages.LOGIN || currentPage === AppPages.REGISTRATION
                    ? <source media="(min-width:1024px)" srcSet={logo_desktop} data-testid="logo-unauth" />
                    : <source media="(min-width:1024px)" srcSet={logo_header_desktop} data-testid="logo-auth" />
            }
            <img src={logo_mobile} alt="Loft Taxi" data-testid="logo-mobile" />
        </picture>
    );
};

Logo.propTypes = {
    currentPage: PropTypes.number
};