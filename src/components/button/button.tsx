import React from 'react';
import { StyledButton } from './styles';

interface IButtonProps {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}

const Button = ({ disabled, text, onClick }: IButtonProps) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
