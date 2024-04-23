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

  button, a {
  cursor: pointer;
  transition: filter .2s;
  }

  button {
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-track {
  background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: ${(props) => props.theme.TINTS.CAKE[100]};
  }

`
