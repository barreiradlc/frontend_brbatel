import * as Yup from 'yup'

  export function validateFormCompany(){
    return Yup.object().shape({
      name: Yup.string().required('Nome é um campo obrigatório'),
      cnpj: Yup.string().required('CNPJ é um campo obrigatório').min(14, 'CNPJ deve conter 14 dígitos'),      
      anual_earnings: Yup.string().required('Faturamento é um campo obrigatório')
    })
  }
  
  export function validateLoginDTO(){
    return Yup.object().shape({
      email: Yup.string().email('Email inválido').required('Email é um campo obrigatório'),
      password: Yup.string().required('Senha é um campo obrigatório')      
    })
  }

  export function validateSignUpDTO(){
    return Yup.object().shape({
      email: Yup.string().email('Email inválido').required('Email é um campo obrigatório'),
      name: Yup.string().required('Nome é um campo obrigatório'),
      username: Yup.string().required('Usuário é um campo obrigatório'),
      password: Yup.string().required('Senha é obrigatória'),
      password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'A confirmação e senha não batem') 
    })
  }
