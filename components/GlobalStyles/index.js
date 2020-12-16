import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    overflow: hidden;
  }
  body {
    margin: 0;
  }
  * {
      transition: all 0.2s linear;
      transition-property: color, background-color, border-color;
  }
`;
