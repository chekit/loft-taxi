import styled, { css } from 'styled-components'
import { connect } from 'react-redux';

import { DESKTOP_SIZE } from '../../../common/constants';

export const PAGE_WRAPPER_TEST_ID = 'page-wrapper';

const PageWrapper = styled.main`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    min-width: $min-width;

    @media screen and (min-width: ${DESKTOP_SIZE}) {
        flex-direction: row;
    }

    ${props => props.isLoggedIn && css`
        @media screen and (min-width: ${DESKTOP_SIZE}) {
            flex-direction: column;
        }
    `}
`;

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(PageWrapper);
