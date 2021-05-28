import React, { useCallback, useState } from 'react';
import { FaBorderAll, FaChevronLeft, FaChevronRight, FaList, FaSignOutAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from './styles';
import logoBRBatel from '../../assets/Assinatura_Horizontal-logo.png'
import Button from '../../components/Button';
import CardList from '../../components/Companies/CardList';
import InlineList from '../../components/Companies/InlineList';
import { useCompanyModal } from '../../hooks/CompanyModalProvider';
import { useCompanyList } from '../../hooks/CompanyListProvider';
import { useHistory } from 'react-router-dom';

export const ANNUAL_EARNINGS = [
  { label : 'BELOW_10_MIL'},
  { label : 'FROM_10_TO_50_MIL'},
  { label : 'FROM_50_TO_200_MIL'},
  { label : 'FROM_200_TO_500_MIL'},
  { label : 'ABOVE_500_MIL'}
]

const Dashboard: React.FC = () => {
  const history = useHistory()
  const { name } = JSON.parse(`${localStorage.getItem('@BR_batel:user')}`)
  const { toggleModalForm } = useCompanyModal()  
  const [listType, setListType] = useState<'card' | 'inline'>('card');  
  const { companies, handleUpdateOptions, options, haveMore, total } = useCompanyList()

  const handleChangeInput = useCallback((e: any) => {
    const { value, id } = e.target
    handleUpdateOptions({ ...options, [id]: value })
  }, [handleUpdateOptions, options]);

  const handleChangeInputInt = useCallback((e: any) => {
    const { value, id } = e.target
    if(id === 'take'){
      handleUpdateOptions({ ...options, [id]: Number(value), page: 1 });
    } else {
      handleUpdateOptions({ ...options, [id]: Number(value) });
    }
  }, [handleUpdateOptions, options]);    

  const backPage = useCallback(() => {
    if(options.page < 2) return;
    const { page } = options;

    handleUpdateOptions({
      ...options,
      page: page - 1 
    })
  }, [handleUpdateOptions, options])
  
  const addPage = useCallback(() => {
    if(!haveMore) return;
    const { page } = options;

    handleUpdateOptions({
      ...options,
      page: page + 1 
    })
  }, [haveMore, options, handleUpdateOptions])

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@BR_batel:user')
    history.push('/')
  }, [])

  return (
    <Container listType={listType}>
      <header>
        <img src={logoBRBatel} alt="Logo"/>
        <input id="query" onChange={handleChangeInput} placeholder="Pesquisar empresa" />
        <div>
          <FaUserCircle color="#fff" size={32} />
          <h5>Bem vindo, {name}</h5>
          <div onClick={handleLogout}>
            Sair&nbsp;<FaSignOutAlt />
          </div>
        </div>
      </header>
      <div>
        <div className="top-options">
          <div className="add-company">
            <p>Empresas</p> 
            <Button label="Adicionar +" onclick={toggleModalForm} />
          </div>
          <div className="change-layout">
            <button className="inline" onClick={() => setListType('inline')} disabled={listType === 'inline'}>
              <FaList />
            </button>
            <button className="card" disabled={listType === 'card'} onClick={() => setListType('card')}>
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
        <p> {companies.length} de {total} empresa{companies.length > 1 ? 's' : ' '} encontrada{companies.length > 1 ? 's' : ' '} </p>
        <div>
          <button disabled={options.page === 1} onClick={backPage}>
            <FaChevronLeft />
          </button>
          <button disabled={!haveMore} onClick={addPage} >
            <FaChevronRight />
          </button>
        </div>
      </footer>      
    </Container>
  )
}

export { Dashboard };