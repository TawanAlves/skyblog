import { createGlobalStyle } from "styled-components";

// font-family: 'Courgette', cursive;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Condensed', sans-serif;
// font-family: 'Roboto Mono', monospace;
// font-family: 'Rubik', sans-serif;

const GlobalStyle = createGlobalStyle`
  body {
   font-family: 'Roboto', sans-serif;
    background-color: #FFFAFA;
    width: 100vw;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
