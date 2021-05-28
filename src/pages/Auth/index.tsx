import * as Yup from 'yup'
import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import logoBRBatel from '../../assets/Assinatura_Horizontal-logo.png'
import Input from '../../components/Form/Input';
import { api } from '../../services/api';
import { validateEmail } from '../../utils/stringUtils';
import { validateLoginDTO, validateSignUpDTO } from '../../utils/validationUtils';
import { Container, Form } from './styled';
import { useHistory } from 'react-router';

const Auth: React.FC = () => {
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)
  const [ context, setContext ] = useState<'access' | 'login' | 'register'>('access')
  const [ confirmRegister, setConfirmRegister ] = useState<boolean>(false)

  async function handleSubmitForm(values: any ,{ reset }: any) {
    try {
      if(values.username){
        const schema = validateSignUpDTO();

        await schema.validate(values, {
          abortEarly: false
        })

        const { email, name, username, password } = values

        await api.post(`auth`, { email, name, username, password })

        setContext('login')
      } else {
        const schema = validateLoginDTO();
  
        await schema.validate(values, {
          abortEarly: false
        })
  
        const { data } = await api.post(`auth/login`, values)

        localStorage.setItem('@BR_batel:user', JSON.stringify(data))

        history.push('dashboard')
      }
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

  const handleOnChangeForm = useCallback(async (e) => {
    const { target: { value } } = e.nativeEvent
    const validEmail = await validateEmail(value)

    if(validEmail){
      handleAccess(value)
    }
  }, [])

  async function handleAccess(email: string){
    const { data } = await api.post('auth/access', { email })

    if(data.id){
      setContext('login')

      setTimeout(() => {

        const inputEmail = formRef.current?.getFieldRef('email')
        inputEmail.disabled = true
        formRef.current?.getFieldRef('password').focus()

      }, 50)

    } else {
      setContext('register')
    }
  }

  return (
    <Container>
      <header>
        <img src={logoBRBatel} alt="Logo"/>
      </header>
      <Form onSubmit={handleSubmitForm} ref={formRef} id="modalForm" onChange={handleOnChangeForm}>
        <Input name="email" placeholder="Digite seu e-mail para continuar" />
        {context === 'login' &&
          <>
            <Input id="password" name="password" placeholder="Senha" type="password" />
            <button> Enviar </button>
          </>
        }

        {context === 'register' &&
          <>          
            {confirmRegister ? 
            <>
              <Input id="name" name="name" placeholder="Nome" type="username" />
              <Input id="username" name="username" placeholder="Username" type="username" />
              <Input id="password" name="password" placeholder="Senha" type="password" />
              <Input id="password_confirm" name="password_confirm" placeholder="Confirmar senha" type="password" />
              <button> Enviar </button>
            </>
            :
            <>
              <h5>Ops, parece que ainda não está cadastrado, gostaria de efetuar seu registro?</h5>
              <button type="button" onClick={() => setConfirmRegister(true)}> Criar uma conta </button>
            </>
            }
          </>
        }
      </Form>
    </Container>
  );
}

export default Auth;