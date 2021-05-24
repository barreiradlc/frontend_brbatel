import styled from "styled-components";



export const Container = styled.div`
  width: calc(100% * (1/4) - 10px - 1px);
  box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.23);
  margin: 8px 4px;
  padding: 8px 16px;
  border-radius: 4px;
  justify-content: flex-start ;
`

export const Thumbnail = styled.img`
  width: 120px;
  height: 120px;
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