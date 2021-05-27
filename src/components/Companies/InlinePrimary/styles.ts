import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.23);
  margin-right: 5px;
  margin-top: 8px;
  padding: 16px 8px;
  border-radius: 4px;
  justify-content: space-between ;
  display: flex;
  align-items: center;


  .contentBody{
    flex-direction: row;
    display: flex;
  }

  div {
    flex-direction: row;

      button {
        padding: 8px 16px;
        margin: 0 32px;
        background-color: #555;
        color: #fff;
        align-self: center;
        justify-self: center;
      }

    div {
      
    }
  }

  img {
    width: 64px;
    height: 64px;
    border: 3px solid #dedede;
    border-radius: 50%;
    margin: 4px 16px 4px 8px;
  }  

  h5 {
    font-size: 17px;
    opacity: 0.5;
  }

  h2 {
    font-size: 23px;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    opacity: 0.7;
  }

  
`
