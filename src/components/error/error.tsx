import React from 'react';
import { StyledError } from './styles';
interface IErrorProps {
  error: string;
}
const Error = ({ error }: IErrorProps) => (
  <StyledError>{error}</StyledError>
);

export default Error;
