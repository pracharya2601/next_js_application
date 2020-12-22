import React, {useContext} from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import styled from "styled-components";

import LanguageChangeBtn from 'components/languagebtn';
import Navbar from "components/navigationbar";

const Home = (props) => {
const { updateTheme } = props;
  return (
    <>
    <Navbar />
    <StyledPage>
      
      <Link href={`/about`}>
        <a>about page</a>
      </Link>
      <LanguageChangeBtn />
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
    </>
    )
}


Home.propTypes = {
  updateTheme: PropTypes.func.isRequired
};

// Override default app theme for this page
Home.pageTheme = {
  headerFontColor: "black",
  headerBackgroundColor: "purple",
  pageBackgroundColor: "grey",
  pageFontColor: "white"
};

Home.getInitialProps = ({req, res}) => {
  const i = "I am Prakash"

  return {i};
}


export default Home;

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pageBackgroundColor};
  position: relative;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
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
