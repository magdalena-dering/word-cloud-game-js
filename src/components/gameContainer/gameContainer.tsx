import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

interface IGameContainerProps {
  children: ReactNode;
}

const GameContainer = ({ children }: IGameContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default GameContainer;
