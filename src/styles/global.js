import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;

    background-color: ${(props) => props.theme.DARK[400]};
    color:${(props) => props.theme.LIGHT[300]};
  }

`
