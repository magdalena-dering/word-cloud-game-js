import styled from "styled-components"

export const StyledMainContainer = styled.main`
 ${props =>  
   props.center ? `display: flex; justify-content: center;` : `display: block` 
  };  
  margin: 5rem;
  @media screen and (max-width: 600px) {
    margin: 2rem;
  }
`
