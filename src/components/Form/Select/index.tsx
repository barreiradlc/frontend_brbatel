import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const SelectInput: React.FC<IInputProps> = ({ name, placeholder, children, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return(
    <Container error={error}>
      <label htmlFor={fieldName}>
       {error}
      </label>
      <select placeholder={placeholder} ref={inputRef} defaultValue={defaultValue} {...rest}>
        {children}
      </select>
    </Container>
  );
}

export default SelectInput;