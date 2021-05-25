import React from 'react';
import { Container, Title } from './styles';

interface IButton{
  label: string;
  onclick(value: any): any;
}

const Button: React.FC<IButton> = ({ label, onclick }) => {
  return (
    <Container onClick={onclick}>
      <Title>{label}</Title>
    </Container>
  );
}

export default Button;