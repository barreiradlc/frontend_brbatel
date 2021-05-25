import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f7f9fc;
  }

  body, input, button {
    font-family: Roboto;
    font: 16px Roboto, sans-serif;
  }

  #root{
    margin: 0 auto;
    /* padding: 0px 20px; */
  }

  button {
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  h5 {
    margin: 0;
  }

`