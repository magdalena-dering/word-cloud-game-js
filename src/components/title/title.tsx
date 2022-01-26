import React from 'react';
import { StyledTitle } from './styles';

interface ITitleProps {
  title?: string;
}

const Title = ({ title }: ITitleProps) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
