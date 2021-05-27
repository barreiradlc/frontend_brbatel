import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import ReactInputMask from 'react-input-mask';
import { Container } from './styles';


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: string;
}

const InputMask: React.FC<IInputProps> = ({ name, placeholder, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    })
  }, [fieldName, registerField])

  return (
    <Container error={error}>
      <label htmlFor={fieldName}>
       {error}
      </label>
      <ReactInputMask placeholder={placeholder} mask={mask} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export default InputMask;