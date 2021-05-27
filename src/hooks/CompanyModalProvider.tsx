import React, { useContext, createContext, useState, useCallback } from 'react';
import { ModalForm } from '../components/Companies/ModalForm';
import { ModalShow } from '../components/Companies/ModalShow';
import { ICompany } from '../types/ICompany';

interface CompanyModalContextData {
  toggleModalForm(): void;
  toggleModalShow(): void;
  setCompany(data: ICompany): void;
}

export const CompanyModalProviderContext = createContext<CompanyModalContextData>(
  {} as CompanyModalContextData,
);

const CompanyModalProvider: React.FC = ({ children }) => {
  const [company, setCompany] = useState({} as ICompany)
  const [openModalForm,setOpenModalForm] = useState(false);
  const [openModalShow,setOpenModalShow] = useState(false);

  const toggleModalForm = useCallback(() => {
    setOpenModalForm(prevData => !prevData);
  }, []);
  
  const toggleModalShow = useCallback(() => {
    
    setOpenModalShow(prevData => !prevData);
  }, [openModalShow]);

  return (
    <CompanyModalProviderContext.Provider value={{ toggleModalShow, toggleModalForm, setCompany }}>
      {children}

      <ModalForm company={company} openedModal={openModalForm} handleToggleModal={toggleModalForm} />      
      <ModalShow company={company} openedModal={openModalShow} handleToggleModal={toggleModalShow} />      
    </CompanyModalProviderContext.Provider>
  );
};

function useCompanyModal(): CompanyModalContextData {
  const context = useContext(CompanyModalProviderContext);

  if (!context) {
    throw new Error('useCompanyModal must be used with CompanyModalProvider');
  }

  return context;
}

export { CompanyModalProvider, useCompanyModal };
