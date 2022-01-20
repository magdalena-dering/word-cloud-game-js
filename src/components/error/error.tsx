import React from 'react';
import { StyledError } from './styles';
interface ErrorProps {
  error: string;
}
const Error = ({ error }: ErrorProps) => (
  <StyledError>{error}</StyledError>
);

export default Error;
