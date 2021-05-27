import React from 'react';
import { ICompany } from '../../../types/ICompany';
import InlinePrimary from '../InlinePrimary';
import { Container } from './styles';

interface IInlineList{
  data: ICompany[];
}

const InlineList: React.FC<IInlineList> = ({ data }: IInlineList) => {
  return (
    <Container>
      {data.map( company => <InlinePrimary key={company.id} data={company} /> )}
    </Container>
  );
}

export default InlineList;