import styled from 'styled-components';


export const StyledDrawer = styled.div`
    height: 100vh;
    min-width: 350px;
    width: 30vw;
    background:  ${({ theme }) => theme.pageFontColor};
    transform: ${({transform}) => transform};
    transition: transform 0.5s linear;
    position: absolute;
    z-index: 500;

`
export const StyleDrawback = styled.div`
    width: 70vw;
    max-width: calc(100vw-350px);
    height:100%;
    background: grey;
    float: right;
    background: red;
    float: right;
`

export const DrawerContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: transparent;
    z-index: -1;
    position: relative;
    transform: ${({transform}) => transform};
    transition: ${({transition}) => transition};
`