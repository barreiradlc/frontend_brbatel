import React from 'react';
import { ICompany } from '../../../types/ICompany';
import { getLabelFromEarnings } from '../../../utils/companyUtils';
import { Container } from './styles';

interface ICardPrimary{
  data: ICompany;
}

const CardList: React.FC<ICardPrimary> = ({ data }: ICardPrimary) => {
  
  return (
    <Container>
      <div>
        <img src={`https://source.unsplash.com/random/?office/${data.id}`} />        
      </div>
      <div>
        <h5>CNPF: {data.cnpj} </h5>
        <h2>{data.name}</h2>
        <span>Rendimento: {getLabelFromEarnings(data.anual_earnings)}</span>
      </div>
    </Container>
  );
}

export default CardList;