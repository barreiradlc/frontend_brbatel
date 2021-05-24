import React from 'react';
import { ICompany } from '../../../types/ICompany';
import CardPrimary from '../CardPrimary';
import { Container } from './styles';

interface ICardList{
  data: ICompany[];
}

const CardList: React.FC<ICardList> = ({ data }: ICardList) => {
  return (
    <Container>
      {data.map( company => <CardPrimary data={company} /> )}
    </Container>
  );
}

export default CardList;