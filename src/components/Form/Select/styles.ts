import styled from "styled-components";

interface IContainerProps{
  error?: string
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;

  label {
    color: red;
  }

  select {
    background: #fff;
    margin: 6px 0;
    padding: 16px;
    border: ${({ error }) => error ? '2px solid red' : 'none' };
    border-radius: 4px;
    width: 340px;
    
    option {
      padding: 0 12px;
    }
  }       
`