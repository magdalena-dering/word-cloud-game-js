//@ts-nocheck
import React from 'react';
import { StyledLink } from './styles';

interface ILinkProps {
  linkTo: string | null;
  linkText: string | null;
  onClick: () => void;
}

const Link = ({ linkTo, linkText, onClick }: ILinkProps) => {
  return (
    linkText && (
      <StyledLink to={linkTo} onClick={onClick}>
        {linkText}
      </StyledLink>
    )

  );
};

export default Link;
