import styled from 'styled-components';

export const StyledHeader = styled.header`
    z-index: 100;
    width: 100vw;
    height: 70px;
    position: absolute;
    top: 0;
    background:  ${({ theme }) => theme.headerBackgroundColor};
`

export const StyleNavItem = styled.nav`
    height: 70px;
`