import React, { useCallback } from 'react';
import { useCompanyModal } from '../../../hooks/CompanyModalProvider';
import { ICompany } from '../../../types/ICompany';
import { getLabelFromEarnings } from '../../../utils/companyUtils';
import { Container, Description, Subtitle, Thumbnail, Title } from './styles';

interface ICardPrimary{
  data: ICompany;
}

const CardList: React.FC<ICardPrimary> = ({ data }: ICardPrimary) => {
  const { toggleModalShow, setCompany } = useCompanyModal();

  const handleShowCompany = useCallback(() => {
    setCompany(data)
    toggleModalShow()
  }, [data, setCompany, toggleModalShow])

  return (
    <Container >
      <Thumbnail src={`https://source.unsplash.com/random/?office/${data.id}`} />
      <Subtitle>CNPJ: {data.cnpj} </Subtitle>
      <Title>{data.name}</Title>
      <Description>{getLabelFromEarnings(data.anual_earnings)}</Description>
      <div>
        <button onClick={handleShowCompany}>Detalhes</button>
      </div>
    </Container>
  );
}

export default CardList;