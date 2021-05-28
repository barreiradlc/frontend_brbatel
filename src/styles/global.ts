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

  body, input, button, textarea {
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

  img {
    object-fit: cover;
  }

  h5 {
    margin: 0;
  }

  .Modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rebeccapurple;
  }

  //Aimations
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  

  @keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }

  @-moz-keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }

  @-webkit-keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }

  @-o-keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }

  @-ms-keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }

`