import React from 'react';
import { ICompany } from '../../../types/ICompany';
import { getLabelFromEarnings } from '../../../utils/companyUtils';
import { Container, Description, Subtitle, Thumbnail, Title } from './styles';

interface ICardPrimary{
  data: ICompany;
}

const CardList: React.FC<ICardPrimary> = ({ data }: ICardPrimary) => {
  
  return (
    <Container>
      <Thumbnail src={`https://source.unsplash.com/random/?office/${data.id}`} />
      <Subtitle>CNPF: {data.cnpj} </Subtitle>
      <Title>{data.name}</Title>
      <Description>{getLabelFromEarnings(data.anual_earnings)}</Description>
    </Container>
  );
}

export default CardList;