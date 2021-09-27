import styled, { keyframes } from "styled-components";

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
  background-color: #008080;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;