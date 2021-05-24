import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.23);
  justify-content: space-between;
  max-width: 900px;
  display: flex;
  flex: 1;
  margin: 0 auto;
  flex-direction: column;
`

export const Header = styled.div`
  background: #d1b27d7d;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 8px 16px;
`

export const Logo = styled.img`
  width: 130px;  
`
export const InputFilter = styled.input`
  padding: 8px;
  border: none;
  border-radius: 2px;
  width: 240px;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
`

export const UserName = styled.p` 
  margin: 0 0 0 15px;
  color: #fff;
  font-weight: 700;
`

export const Body = styled.div`
  padding: 46px 16px 16px;
  background-color: #004751;  
`

export const TopContent = styled.div`
  padding-bottom: 8px ;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export const Title = styled.p`
  color: #fff;
  font-size: 21px;
`

export const Button = styled.div``

export const Footer = styled.div`
  padding: 16px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  select {
    font-size: 15px;
  }
`

export const TakeOptions = styled.div`
  margin: 0 12px;
  `
export const PagesLength = styled.p`
  margin: 0 12px;
`
export const Paginate = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;

  button {
    align-items: center;
    padding: 4px;
  }
`
export const IconButton = styled.image``