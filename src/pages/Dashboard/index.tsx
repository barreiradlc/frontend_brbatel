import React, { useCallback, useEffect, useState } from 'react';
import { FaBorderAll, FaChevronLeft, FaChevronRight, FaList } from 'react-icons/fa';

import { Container, ModalContainer } from './styles';
import logoBRBatel from '../../assets/Assinatura_Horizontal-logo.png'
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../components/Button';
import CardList from '../../components/Companies/CardList';
import { api } from '../../services/api';
import { ICompany } from '../../types/ICompany';

const customStyles = {
  content: {
      // background: colors['fade'],
      display: 'table',
      // background: colors['fade'],
      border: '2px solid #555',
      padding: '5px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-25%',
      transform: 'translate(-50%, -50%)',
  }
};

interface IOptions {
  take: number;
  page: number;
  query: string;
}

const Dashboard: React.FC = () => {
  const [modalOpenModal,setOpenModal] = useState(false);
  const [companies, setCompanies] = useState<ICompany[]>([] as ICompany[]);
  const [listType, setListType] = useState<'card' | 'inline'>('card');
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [options, setOptions] = useState<IOptions>({
    page: 1,
    query: '',
    take: 10
  } as IOptions);

  const handleChangeInput = useCallback((e: any) => {
    const { value, id } = e.target
    setOptions({ ...options, [id]: value })
  }, [options]);

  const handleChangeInputInt = useCallback((e: any) => {
    const { value, id } = e.target
    setOptions({ ...options, [id]: Number(value) });
  }, [options]);  

  useEffect(() => {
    fetchCompanies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const fetchCompanies = useCallback(async () => {
    const { data } = await api.get('company', {
      params: options
    });

    if(data.length < options.take) {
      setHaveMore(false)
    } else {
      setHaveMore(true)
    }

    setCompanies(data)
  }, [options])

  const backPage = useCallback(() => {
    const { page } = options;

    setOptions({
      ...options,
      page: page - 1 
    })
  }, [options])
  
  const addPage = useCallback(() => {
    const { page } = options;

    setOptions({ 
      ...options,
      page: page + 1 
    })
  }, [options])

  return (
    <Container listType={listType}>
      <header>
        <img src={logoBRBatel} alt="Logo"/>
        <input id="query" onChange={handleChangeInput} placeholder="Pesquisar empresa" />
        <div>
          <FaUserCircle color="#fff" size={32} />
          <h5>Bem vindo, Augusto</h5>
        </div>
      </header>
      <div>
        <div>
          <div className="add-company">
            <p>Empresas</p> 
            <Button label="Adicionar" onclick={() => setOpenModal(true)} />
          </div>
          <div className="change-layout">
            <button onClick={backPage} disabled={listType === 'inline'}>
              <FaList />
            </button>
            <button disabled={!haveMore} onClick={addPage}>
              <FaBorderAll />
            </button>
          </div>
        </div>
        <CardList data={companies} />
      </div>
      <footer>
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
        <p> {companies.length} empresa{companies.length > 1 ? 's' : ''} encontrada{companies.length > 1 ? 's' : ''} </p>
        <div>
          <button disabled={options.page === 1} onClick={backPage}>
            <FaChevronLeft />
          </button>
          <button disabled={!haveMore} onClick={addPage}>
            <FaChevronRight />
          </button>
        </div>
      </footer>


      <ModalContainer isOpen={modalOpenModal} ariaHideApp={false} style={customStyles}>
        <div>
        <p> Hello </p>
        </div>
      </ModalContainer>
    </Container>
  )
}

export { Dashboard };