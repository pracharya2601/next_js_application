import styled from 'styled-components';

const StyledSelect = styled.select`
    height: 20px;
    width: 100px;
    color: ${({ theme }) => theme.pageFontColor};
    background: ${({ theme }) => theme.pageBackgroundColor};
    border-color: ${({ theme }) => theme.pageFontColor};
    border-radius: 5px;
    && :focus {
        outline: none;
    }
`

const StyledLabel = styled.label`
    color: ${({ theme }) => theme.pageFontColor};
    margin: 0 5px;
`

const LanguageBtnContainer = styled.div`
    disply: flex;

`


export {LanguageBtnContainer ,StyledSelect, StyledLabel};