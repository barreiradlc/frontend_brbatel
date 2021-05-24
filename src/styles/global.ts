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
      background: #d1b27d7d;
    }
    
    body, input, button {              
      font-family: Roboto;
      font: 16px Roboto, sans-serif;
    }
    
    #root{
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    
    button {
      cursor: pointer;
    }
    
    h5 {
      margin: 0;
    }

`