import React from 'react';
import { StyledContainer } from './styles';
interface GameContainerProps {
  children: any;
}

const GameContainer = ({ children }: GameContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default GameContainer;
