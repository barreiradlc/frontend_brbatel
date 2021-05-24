import React from 'react';
import { Container, Title } from './styles';

interface IButton{
  label: string;
}

const Button: React.FC<IButton> = ({ label }) => {
  return (
    <Container>
      <Title>{label}</Title>
    </Container>
  );
}

export default Button;