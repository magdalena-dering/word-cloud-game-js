import React from 'react';
import { StyledTitle } from './styles';

interface TitleProps {
  title?: string;
}

const Title = ({ title }: TitleProps) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
