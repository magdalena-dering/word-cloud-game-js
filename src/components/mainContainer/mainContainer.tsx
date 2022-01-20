import { StyledMainContainer } from './styles';

interface MainContainerProps {
  children: any;
  center?: boolean;
}

const MainContainer = ({ children, center }: MainContainerProps) => (
  <StyledMainContainer center={center}>
    {children}
  </StyledMainContainer>
);

export default MainContainer;
