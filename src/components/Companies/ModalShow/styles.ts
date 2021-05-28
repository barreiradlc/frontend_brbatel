import { Form as Unform } from '@unform/web';
import Modal from 'react-modal';
import styled from "styled-components";

export const Form = styled(Unform)`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  
  label {
    margin-top: 6px;
  }
`

export const ModalContainer = styled(Modal)`
      border: 2px solid rgb(85, 85, 85);
      border-radius: 5px;
      position: relative;
      top: 25%;
      
      background-color: #f7f9fc;
      max-height: 80vh;
      justify-content: center;
      max-width: 800px;
      align-items: flex-start;
      display: flex;
      flex: 1;
      margin: auto;
      flex-direction: column;  

      > header {
        padding: 16px 24px;
        width: 100%;  
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        border-bottom: 2px solid #dedede;

        button {
          align-self: center;
          justify-self: center;
          display: flex;
          padding: 8px;
          color: #fff;          
          background-color: #004752;          
        }
      }

      > div {
        flex-direction: row;
        display: flex;
        line-height: 1.5;

        img {
          width: 250px;
          height: 250px;          
          margin: 21px;
          border-radius: 50%;
          border: 2px solid #dedede;
        }

        > div {
          padding: 16px 32px;

          h5 {
            color: #555;
          }

        }
      }
      
      > footer {
        border-top: 2px solid #dedede;
        width: 100%;
        padding: 16px 24px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        button {
          padding: 12px;
          margin: 0 0 0 12px;
          font-weight: 700;
          color: #fff;
          background: #cc3300;
        }

        .invertButton {
          background-color: #004752;
          color: #f7f9fc;
        }


      }
  
    p {
      font-size:  17px;
    }
`