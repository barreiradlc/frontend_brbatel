import { FormHandles } from "@unform/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { ANNUAL_EARNINGS } from "../../../pages/Dashboard";
import { IANUAL_EARNINGS, ICompany } from "../../../types/ICompany";
import { getLabelFromEarnings } from "../../../utils/companyUtils";
import { validateFormCompany } from "../../../utils/validationUtils";
import Input from "../../Form/Input";
import { Form, ModalContainer } from "./styles";
import * as Yup from 'yup'
import TextArea from "../../Form/TextArea";
import SelectInput from "../../Form/Select";
import InputMask from "../../Form/InputMask";
import { api } from "../../../services/api";
import { useCompanyList } from "../../../hooks/CompanyListProvider";
import { parseCNPJ } from "../../../utils/stringUtils";

interface IModalFormProps{
  openedModal: boolean;
  handleToggleModal(): void;
  company: ICompany;
}


export function ModalForm({ openedModal, handleToggleModal, company }: IModalFormProps) {
  const formRef = useRef<FormHandles>(null)
  const { handleUpdateOptions } = useCompanyList()

  function handleFinishRequest(name: string){
    Swal.fire({
      title: 'Sucesso!',
      text: `Empresa ${name} ${company.id ? 'atualizada' : 'cadastrada'} com sucesso!`,
      icon: 'success',
      confirmButtonText: 'OK',      
    })
    .then(() => handleUpdateOptions({
      page: 1,
      take: 5,
      query: ''
    }))
  }

  async function handleSubmitForm(values: any ,{ reset }: any) {
    try {
      const parsedcnpj = await parseCNPJ(values.cnpj)
      
      const companyDTO = {...values, cnpj: parsedcnpj}

      const schema = validateFormCompany();

      await schema.validate(companyDTO, {
        abortEarly: false
      })

      if(!!company.id){
        const { data } = await api.put(`company/${company.id}`, companyDTO)

        handleFinishRequest(data.name)
      } else {
        const { data } = await api.post('company', companyDTO)
  
        handleFinishRequest(data.name)
      }

      handleToggleModal();

      reset();

    } catch (error) {
      if(error instanceof Yup.ValidationError){
        let errorMessages = {}

        error.inner.forEach(err => errorMessages = {
          ...errorMessages,
          [`${err.path}`] : err.message
        });

        formRef.current?.setErrors(errorMessages)
      }
    }
  }

  return (
    <>
      <ModalContainer isOpen={openedModal} ariaHideApp={false}>
        <header>
          <h2>{company.id ? 'Editar' : 'Cadastrar'} empresa</h2>
          <button onClick={handleToggleModal}><FaTimes /></button>
        </header>

        <Form initialData={company} onSubmit={handleSubmitForm} ref={formRef} id="modalForm">
          <Input name="name" placeholder="Nome" />
          <InputMask name="cnpj" mask="99.999.999/9999-99" placeholder="XX.XXX.XXX/XXXX-XX" />
          <SelectInput name="anual_earnings">
            <option value=''>Selecione</option>
            {ANNUAL_EARNINGS.map(( earning ) => (
              <option key={earning.label} value={earning.label}>{getLabelFromEarnings(earning.label as IANUAL_EARNINGS)}</option>
            ))}
          </SelectInput>
          <TextArea name="about" placeholder="Sobre" />                           
        </Form>
        <footer>
          <button type="button">Cancelar</button>
          <button form="modalForm" className="invertButton" >{company.id ? 'Editar' : 'Salvar'}</button>
        </footer>
      </ModalContainer>
    </>
  );
}