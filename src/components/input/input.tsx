import React from 'react';
import { StyledInput, StyledLabel } from './styles';
import Error from '../error';

interface InputProps {
  title: string;
  label: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: any;
}

const Input = ({
  title,
  label,
  placeholder,
  value,
  error,
  onChange,
}: InputProps) => {
  return (
    <>
      <StyledLabel htmlFor={title}>{label}</StyledLabel>
      <StyledInput
        id={title}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Error error={error} />
    </>
  );
};

export default Input;
