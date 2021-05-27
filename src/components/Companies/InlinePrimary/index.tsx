import React, { useCallback } from 'react';
import { FaEdit, FaRegCircle } from 'react-icons/fa';
import { useCompanyModal } from '../../../hooks/CompanyModalProvider';
import { ICompany } from '../../../types/ICompany';
import { getLabelFromEarnings } from '../../../utils/companyUtils';
import { Container } from './styles';

interface ICardPrimary {
  data: ICompany;
}

const InlinePrimary: React.FC<ICardPrimary> = ({ data }: ICardPrimary) => {
  const { toggleModalShow, setCompany } = useCompanyModal()

  const handleShowCompany = useCallback(() => {
    toggleModalShow();
    setCompany(data)
  }, [])

  return (
    <Container>
      <div className="contentBody">
        <div>
          <img src={`https://source.unsplash.com/random/?office/${data.id}`} />
        </div>
        <div>
          <h5>CNPF: {data.cnpj} </h5>
          <h2>{data.name}</h2>
          <span>Rendimento: {getLabelFromEarnings(data.anual_earnings)}</span>
        </div>
      </div>
      <div>
        <button onClick={handleShowCompany}>Detalhes</button>
      </div>
    </Container>
  );
}

export default InlinePrimary;