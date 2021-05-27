import React, { useContext, createContext, useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import { ModalForm } from '../components/Companies/ModalForm';
import { ModalShow } from '../components/Companies/ModalShow';
import { api } from '../services/api';
import { ICompany } from '../types/ICompany';

interface IOptions {
  take: number;
  page: number;
  query: string;
}

interface CompanyListContextData {
  handleUpdateOptions(data: IOptions): void;  
  companies: ICompany[];
  options: IOptions;
  haveMore: boolean;
  total: number;
}

export const CompanyListProviderContext = createContext<CompanyListContextData>(
  {} as CompanyListContextData,
);

const CompanyListProvider: React.FC = ({ children }) => {
  const [companies, setCompanies] = useState([] as ICompany[])  
  const [haveMore, setHaveMore] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [options, setOptions] = useState<IOptions>({
    page: 1,
    query: '',
    take: 10
  } as IOptions);

  const fetchCompanies = useCallback(async () => {
    const { data } = await api.get('company', {
      params: options
    });

    const { nodes, total } = data
    const { page, take } = options

    const contentRendered = page * nodes.length;

    if((contentRendered <= total && take !== nodes.length) || contentRendered === total) {
      setHaveMore(false)
    } else {
      setHaveMore(true)
    }

    setTotal(total)
    handleUpdateCompanies(nodes)
  }, [options])

  const handleUpdateCompanies = useCallback((data) => {
    setCompanies(data)
  }, [companies])
  
  const handleUpdateOptions = useCallback((data) => {
    setOptions({ ...data, ...options})
  }, [companies])

  useEffect(() => {
    fetchCompanies()
  },[options])

  return (
    <CompanyListProviderContext.Provider value={{ companies, handleUpdateOptions, options, haveMore, total }}>
      {children}      
    </CompanyListProviderContext.Provider>
  );
};

function useCompanyList(): CompanyListContextData {
  const context = useContext(CompanyListProviderContext);

  if (!context) {
    throw new Error('useCompanyList must be used with CompanyListProvider');
  }

  return context;
}

export { CompanyListProvider, useCompanyList };
