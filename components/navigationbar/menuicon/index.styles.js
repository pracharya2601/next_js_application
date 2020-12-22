import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    cursor: pointer;
`

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
`

export const BarOne = styled(Bar)`
    transform:  ${({transform}) => transform};
    -webkit-transform:  ${({transform}) => transform};
`

export const BarTwo = styled(Bar)`
    opacity: ${({opacity}) => opacity};
`

export const BarThree = styled(Bar)`
    transform:  ${({transform}) => transform};
    -webkit-transform:  ${({transform}) => transform};
`