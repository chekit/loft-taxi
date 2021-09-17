import styled, { css } from 'styled-components'
import { DESKTOP_SIZE } from '../../../common/constants';

import background from './../../../assets/login-page-background.png';

export const PageWithForm = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: auto;
    height: 100%;

    @media screen and (min-width: ${DESKTOP_SIZE}) {
        background: transparent url('${background}') center center fixed;
        background-size: cover;
    }

    ${props => props.isFadeout && css`
        @media screen and (min-width: ${DESKTOP_SIZE}) {
            &:after {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.45);
                content: '';
            }
        }
    `}
`;