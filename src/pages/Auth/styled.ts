import { Form as Unform } from '@unform/web';
import styled from "styled-components";

export const Form = styled(Unform)`
  padding: 32px 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #004752;
  /* width: 100%;
  display: flex;
  flex-direction: column; */

  h5 {
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    padding: 12px;
    color: #fff;
  }

  button {
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    align-self: center;
    justify-self: center;
    
    margin-top: 12px;
    padding: 12px 32px;
    color: #004752;
    font-weight: 700;
    background-color: #f7f9fc;
   
  }

  input {
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
  }

`

export const Container = styled.div`
  border-radius: 5px;
  border: 2px solid #dedede;
  background-color: #004752;
  padding: 3em;
  margin: 4em auto;
  /* height: 60vh; */
  max-width: 760px;
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  /* input:disabled {
    background: #dedede;
    color: #556;
  }
  input {
    border: 2px solid #f7f9fc;
  }
  input:focus {
    border: 2px solid #dedede;
  } */


  header {
    img {
      
      height: 120px;
    }
  }
`
