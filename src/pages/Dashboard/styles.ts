import styled from "styled-components";

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

      div {
        cursor: pointer;
        margin: 0 0 0 24px;
        color: #fff;
        justify-content: space-between;

        h5 {
          font-weight: 700;
        }
      }
    }
  }

  > div {
    background-color: #f7f9fc;
    padding: 32px 6rem;
    height: 100%;
    transition: height 5s;

    .top-options{
      display: flex;      
      padding-bottom: 8px;
      flex-direction: row;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

    }

    > div {
      display: flex;
      padding-bottom: 8px;
      /* flex-direction: row; */
      /* align-items: center; */
      /* flex-direction: row; */
      /* justify-content: space-between; */

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
        margin-right: 8px;
        flex-direction: row;
        display: flex;
        justify-content: center;

        .inline{
          background-color: ${({ listType }) => listType === 'inline' ? "#dedede" : "#004752;"}
        }

        .card{
          background-color: ${({ listType }) => listType === 'card' ? "#dedede" : "#004752;"}
        }

        
        > button {
          

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