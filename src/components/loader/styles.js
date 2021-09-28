import styled, { keyframes } from "styled-components";
import { palette } from '../../constants/palette'

const { teal } = palette;

export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 2rem }
  100% { margin-bottom: 0 }
`;
export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const Dot = styled.div`
  background-color: ${teal};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;