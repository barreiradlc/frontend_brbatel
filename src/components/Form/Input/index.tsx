import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container error={error}>
      <label htmlFor={fieldName}>
       {error}
      </label>
      <input placeholder={placeholder} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export default Input;