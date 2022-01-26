import React, { ChangeEventHandler } from 'react';
import { StyledInput, StyledLabel } from './styles';
import Error from '../error';

interface IInputProps {
  title: string;
  label: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  title,
  label,
  placeholder,
  value,
  error,
  onChange,
}: IInputProps) => {
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
