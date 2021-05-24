import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Body, Container, Footer, Header, IconButton, InputFilter, Logo, PagesLength, Paginate, TakeOptions, Title, TopContent, UserContainer, UserName } from './styles';
import logoBRBatel from '../../assets/Assinatura_Horizontal-logo.png'
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../components/Button';
import CardList from '../../components/Companies/CardList';
import { api } from '../../services/api';
import { ICompany } from '../../types/ICompany';

interface IOptions {
  take: number;
  page: number;
  query: string;
}

const Dashboard: React.FC = () => {
  const [companies, setCompanies] = useState<ICompany[]>([] as ICompany[]);
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [haveLess, setHaveLess] = useState<boolean>(false);
  const [options, setOptions] = useState<IOptions>({
    take: 10,
    page: 1,
    query: ''
  } as IOptions);

  const handleChangeInput = useCallback((e: any) => {
    const { value, id } = e.target
    setOptions({ ...options, [id]: value })
  }, [options]);

  const handleChangeInputInt = useCallback((e: any) => {
    const { value, id } = e.target
    setOptions({ ...options, [id]: Number(value) })
  }, [options]);

  useEffect(() => {
    fetchCompanies()
  }, [options])

  const fetchCompanies = useCallback(async () => {
    const { data } = await api.get('company', {
      params: options
    })

    // if(data.length < options.take) {
    //   setOptions({ 
    //     ...options, 
    //     page: options.page + 1 
    //   })
    // }

    setCompanies(data)
  }, [options])

  // const addPage = useCallback(() => {
  //   setOptions({

  //   })
  // }, [])

  return (
    <Container>
      <Header>
        <Logo src={logoBRBatel} />
        <InputFilter id="query" onChange={handleChangeInput} placeholder="Pesquisar empresa" />
        <UserContainer>
          <FaUserCircle color="#fff" />
          <UserName>Bem vindo, Augusto</UserName>
        </UserContainer>
      </Header>
      <Body>
        <TopContent>
          <Title>Empresas</Title>
          <Button label="Adicionar" />
        </TopContent>
        <CardList data={companies} />
      </Body>
      <Footer>
        <select
          id="take"
          name="options.take"
          value={options.take}
          onChange={handleChangeInputInt}
          className="form-control form-control-sm">
          <option value="2">2 por página</option>
          <option value="5">5 por página</option>
          <option value="10">10 por página</option>
          <option value="20">20 por página</option>
        </select>
        <PagesLength> {companies.length} empresa{companies.length > 1 ? 's' : ''} encontrada{companies.length > 1 ? 's' : ''} </PagesLength>
        <Paginate>
          <button>
            <FaChevronLeft />
          </button>
          <button>
            <FaChevronRight />
          </button>
        </Paginate>
      </Footer>
    </Container>
  )
}

export { Dashboard };