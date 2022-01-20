import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}

const Button = ({ disabled, text, onClick }: ButtonProps) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
