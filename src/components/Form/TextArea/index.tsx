import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<IInputProps> = ({ name, placeholder, ...rest }) => {
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
      <textarea placeholder={placeholder} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export default TextArea;