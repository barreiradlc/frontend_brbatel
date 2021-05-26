import styled from "styled-components";
import Modal from 'react-modal';


export const ModalContainer = styled(Modal)`
      border: 2px solid rgb(85, 85, 85);
      border-radius: 5px;
      background-color: #f7f9fc;
      max-height: 80vh;
      justify-content: center;
      max-width: 800px;
      align-items: flex-start;
      display: flex;
      flex: 1;
      margin: 5em;
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

      > form {
        width: 100%;
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        
        label {
          margin-top: 6px;
        }

        input {
          margin: 6px 0;
          border: 2px solid #555;
          padding: 16px;
          border: none;
          border-radius: 4px;
          width: 340px;
        }
        
        select {

          margin: 6px 0;
          border: 2px solid #555;
          padding: 16px;
          border: none;
          border-radius: 4px;
          width: 340px;
          
          option {
            padding: 0 12px;
          }
        }
        
        textarea {
          margin: 6px 0;
          border: 2px solid #555;
          padding: 16px;
          border: none;
          border-radius: 4px;
          width: 340px;
          max-width: 340px;
          max-height: 450px;
          min-height: 140px;
          resize: none;
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

interface IListProps {
  listType: 'inline' | 'card'
}

export const Container = styled.div<IListProps>`
  justify-content: space-between;  
  display: flex;
  flex: 1;
  margin: 0 auto;
  flex-direction: column;

  header {
    background: #1d1d1b;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 32px 6rem;

    img {
      width: 130px;
    }

    input {
      border: 2px solid #555;
      padding: 16px;
      border: none;
      border-radius: 4px;
      width: 340px;
    }

    div {
      display: flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;

      h5 {
        margin: 0 0 0 15px;
        color: #fff;
        font-size: 21px;
        font-weight: 700;
      }
    }
  }

  > div {
    background-color: #f7f9fc;
    padding: 32px 6rem;

    > div {
    
      display: flex;
      padding-bottom: 8px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      .add-company {
        flex-direction: row;
        display: flex;
        align-items: center;
        
        
        p {
          padding: 8px;
          border-right: 2px solid #1d1d1b;
          color: #1d1d1b;
          font-size: 21px;
        }

        button {
          
          background-color: #004752;

          color: #fff;
          padding: 4px 12px;
          margin: 0 8px;

        }
      }

      .change-layout {      
        flex-direction: row;
        display: flex;
        justify-content: center;

        > button {
          background-color: #004752;

          color: #fff;
          padding: 4px 12px;
          margin: 0 8px;

          svg {
            display: flex;
          }
          
        }

        > button {
          background-color: #004752;

          color: #fff;
          padding: 4px 12px;
          margin: 0 0 0 16px;

          svg {
            display: flex;
          }
          
        }

      }
    }

  }
  
  footer {
    padding: 32px 6rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    select {
      padding: 4px;
      margin: 4px;
      font-size: 15px;
    }

    p {
      margin: 12px;
    }
    
    > div {
      flex-direction: row;
      display: flex;
      justify-content: center;

      button {
        align-items: center;
        padding: 4px;
        margin: 4px;

        svg {
          display: flex;
        }
      }

    }

  }
`