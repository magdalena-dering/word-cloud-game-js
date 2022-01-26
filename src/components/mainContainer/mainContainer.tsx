import { ReactNode } from 'react';
import { StyledMainContainer } from './styles';

interface IMainContainerProps {
  children: ReactNode;
  center?: boolean;
}

const MainContainer = ({ children, center }: IMainContainerProps) => (
  <StyledMainContainer center={center}>
    {children}
  </StyledMainContainer>
);

export default MainContainer;
