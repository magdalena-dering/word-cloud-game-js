import React from 'react';
import { StyledLink } from './styles';

interface LinkProps {
  linkTo: string;
  linkText?: string;
  onClick: () => void;
}

const Link = ({ linkTo, linkText, onClick }: LinkProps) => {
  return (
    <StyledLink to={linkTo} onClick={onClick}>
      {linkText}
    </StyledLink>
  );
};

export default Link;
