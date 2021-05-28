import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% * (1/4) - 20px - 1px);
  box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.23);
  margin-right: 5px;
  margin-top: 8px;
  padding: 16px 8px;
  border-radius: 4px;
  align-self: flex-start;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      padding: 8px 16px;
      margin: 0 8px;
      background-color: #555;
      color: #fff;
    }

  }
`

export const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
  border: 3px solid #dedede;
  border-radius: 50%;
  margin: 4px;
`

export const Subtitle = styled.h5`
  font-size: 17px;
  opacity: 0.5;
  `
  export const Title = styled.h5`
  font-size: 23px;
  font-weight: 700;
  `
  export const Description = styled.h5`
  font-size: 12px;
  font-weight: 700;
  opacity: 0.7;
`