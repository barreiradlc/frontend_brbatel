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

  textarea {
    margin: 6px 0;
    border: ${({ error }) => error ? '2px solid red' : 'none' };
    padding: 16px;
    border-radius: 4px;
    width: 340px;
    max-width: 340px;
    max-height: 450px;
    min-height: 140px;
    resize: none;
  }     
`