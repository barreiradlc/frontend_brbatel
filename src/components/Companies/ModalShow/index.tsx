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
import { useCompanyModal } from "../../../hooks/CompanyModalProvider";

interface IModalShowProps{
  openedModal: boolean;
  handleToggleModal(): void;
  company: ICompany;
}


export function ModalShow({ openedModal, handleToggleModal, company }: IModalShowProps) {

  const { toggleModalShow, toggleModalForm, setCompany } = useCompanyModal()

  const handleDeleteCompany = useCallback(async() => {
    const { isConfirmed } = await Swal.fire({
      title: 'Tem certeza que deseja deletar esta empresa?',
      text: "Não há como reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004752',
      cancelButtonColor: '#cc3300',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    })

    console.log(company)

    try {
      if (isConfirmed) {
        await api.delete(`company/${company.id}`)

        Swal.fire({
          title : 'Deletado!',
          titleText : 'Registro deletado com sucesso.',
          icon : 'success',
          confirmButtonColor: '#004752'
        })

        handleToggleModal()
      }

    } catch (error) {
      
      Swal.fire({
        title:'Erro!',
        titleText: 'Houve um erro ao deletar o registro.',
        icon: 'error',
        confirmButtonColor: '#004752'
      })

    }
  },[])

  const handleEditModal = useCallback(() => {
    toggleModalForm();
    toggleModalShow();
  }, [])

  return (
    <>
      <ModalContainer isOpen={openedModal} ariaHideApp={false}>
        <header>
          <h2>{company.name}</h2>
          <button onClick={handleToggleModal}><FaTimes /></button>
        </header>
        <div>
          <img src={`https://source.unsplash.com/random/?office/${company.id}`} alt={company.name} />
          <div>
            <h3>Rendimento Anual: {getLabelFromEarnings(company.anual_earnings)}</h3>
            <br />
            <h2>CNJP: {company.cnpj}</h2>
            <br />
            <h5>Sobre: {company.about}</h5>
          </div>
        </div>
        <footer>
          <button type="button" onClick={handleDeleteCompany}>Deletar</button>
          <button onClick={handleEditModal} className="invertButton" >Editar</button>
        </footer>
      </ModalContainer>
    </>
  );
}