import React, {useContext} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Cookies from 'cookies'

import {languageContext} from 'context/language/languageprovider';


const About = (props) => {
const { updateTheme } = props;
// console.log(document.cookies)

console.log(props)
  return (
    <StyledPage>
      <Heading>Select a color to update the theme</Heading>
      <ButtonContainer>
        <Button
          onClick={() =>{
            updateTheme({
              headerFontColor: "black",
              headerBackgroundColor: "grey",
              pageBackgroundColor: "purple",
              pageFontColor: "black",
              pageFontHoverColor: "red"
            })
            localStorage.setItem('theme', 'purple')
          }
          }
        >
          purple
        </Button>
        <Button
          onClick={() =>{
            updateTheme({
              headerFontColor: "black",
              headerBackgroundColor: "grey",
              pageBackgroundColor: "green",
              pageFontColor: "white",
              pageFontHoverColor: "teal"
            })
            localStorage.setItem('theme', 'green')
          }
          }
        >
          green
        </Button>
        <Button onClick={() => {
          updateTheme({})
          localStorage.setItem('theme', '')
        }}>reset</Button>
      </ButtonContainer>
    </StyledPage>
    )
}


About.propTypes = {
  updateTheme: PropTypes.func.isRequired
};

// Override default app theme for this page
About.pageTheme = {
  headerFontColor: "black",
  headerBackgroundColor: "orange",
  pageBackgroundColor: "orange",
  pageFontColor: "teal"
};

About.getInitialProps = ({req, res}) => {
  const cookies = new Cookies(req, res);
  cookies.set('myCookiesName', 'Praksh Acharya', {
    httpOnly: true
  })

  let cook = cookies.get('myCookiesName');
  return {cook};
}


export default About;

const StyledPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pageBackgroundColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.pageFontColor};
  padding: 2em 0;
`;

const Button = styled.button`
  outline: none;
  line-height: 2.5em;
  font-size: 17px;
  padding: 0 10px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.pageFontColor};
  color: ${({ theme }) => theme.pageFontColor};
  background-color: ${({ theme }) => theme.pageBackgroundColor};
  :hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.pageFontHoverColor};
    color: ${({ theme }) => theme.pageFontHoverColor};
  }
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.pageFontColor};
`;
