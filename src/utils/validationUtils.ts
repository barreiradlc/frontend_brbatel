import * as Yup from 'yup'

  export function validateFormCompany(){
    return Yup.object().shape({
      name: Yup.string().required('Nome é um campo obrigatório'),
      cnpj: Yup.string().required('CNPJ é um campo obrigatório').min(14, 'CNPJ deve conter 14 dígitos'),
      about: Yup.string().required('Sobre é um campo obrigatório'),
      anual_earnings: Yup.string().required('Faturamento é um campo obrigatório')
    })
  }