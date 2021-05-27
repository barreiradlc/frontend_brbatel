import React, { useCallback, useEffect, useState } from 'react';
import { FaBorderAll, FaChevronLeft, FaChevronRight, FaList, FaTimes } from 'react-icons/fa';

import { Container } from './styles';
import logoBRBatel from '../../assets/Assinatura_Horizontal-logo.png'
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../components/Button';
import CardList from '../../components/Companies/CardList';
import { api } from '../../services/api';
import { IANUAL_EARNINGS, ICompany } from '../../types/ICompany';
import { getLabelFromEarnings } from '../../utils/companyUtils';
import InlineList from '../../components/Companies/InlineList';
import { ModalForm } from '../../components/Companies/ModalForm';
import { ModalShow } from '../../components/Companies/ModalShow';
import { useCompanyModal } from '../../hooks/CompanyModalProvider';

export const ANNUAL_EARNINGS = [
  { label : 'BELOW_10_MIL'},
  { label : 'FROM_10_TO_50_MIL'},
  { label : 'FROM_50_TO_200_MIL'},
  { label : 'FROM_200_TO_500_MIL'},
  { label : 'ABOVE_500_MIL'}
]
  
interface IOptions {
  take: number;
  page: number;
  query: string;
}

const Dashboard: React.FC = () => {
  const { toggleModalForm } = useCompanyModal()
  const [modalOpenModal,setOpenModal] = useState(false);
  const [companies, setCompanies] = useState<ICompany[]>([] as ICompany[]);
  const [listType, setListType] = useState<'card' | 'inline'>('card');
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
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
    if(id === 'take'){
      setOptions({ ...options, [id]: Number(value), page: 1 });
    } else {
      setOptions({ ...options, [id]: Number(value) });
    }
  }, [options]);  

  useEffect(() => {
    fetchCompanies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const fetchCompanies = useCallback(async () => {
    const { data } = await api.get('company', {
      params: options
    });

    const { nodes, total } = data
    const { page, take } = options

    const contentRendered = page * nodes.length;
   
    //TODO, correção em paginação

    if(contentRendered <= total && take !== nodes.length) {
      setHaveMore(false)
    } else {
      setHaveMore(true)
    }

    setTotal(total)
    setCompanies(nodes)
  }, [options])

  const backPage = useCallback(() => {
    if(options.page < 2) return;
    const { page } = options;

    setOptions({
      ...options,
      page: page - 1 
    })
  }, [options])
  
  const addPage = useCallback(() => {
    console.log(haveMore)

    if(!haveMore) return;
    const { page } = options;

    setOptions({
      ...options,
      page: page + 1 
    })
  }, [options])

  function handleToggleModal(){
    setOpenModal(prevData => !prevData)
  }

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
        <div className="top-options">
          <div className="add-company">
            <p>Empresas</p> 
            <Button label="Adicionar +" onclick={toggleModalForm} />
          </div>
          <div className="change-layout">
            <button onClick={() => setListType('inline')} disabled={listType === 'inline'}>
              <FaList />
            </button>
            <button disabled={listType === 'card'} onClick={() => setListType('card')}>
              <FaBorderAll />
            </button>
          </div>
        </div>
        {listType === 'inline' ?
          <InlineList data={companies} />
          :
          <CardList data={companies} /> 
        }
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
        <p> {companies.length} de {total} empresa{companies.length > 1 ? 's' : ''} encontrada{companies.length > 1 ? 's' : ''} </p>
        <div>
          <button disabled={options.page === 1} onClick={backPage}>
            <FaChevronLeft />
          </button>
          <button disabled={!haveMore} onClick={addPage} >
            <FaChevronRight />
          </button>
        </div>
      </footer>

      {/* <ModalForm openedModal={modalOpenModal} handleToggleModal={handleToggleModal} /> */}
      
      
    </Container>
  )
}

export { Dashboard };