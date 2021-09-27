import styled from "styled-components"

export const StyledText = styled.p`
 color: #696969;
  font-size: 15px;
  padding: 0.5rem;
  margin: 2rem;
  ${props =>  
    props.gameView ? `cursor: pointer` : `cursor: default` 
     };   
  ${props =>
    props.active
      && props.gameView &&`color: #20B2AA; font-weight: bold; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     };
  ${props =>
    props.clickedCorrect
  && !props.gameView &&`background: #20B2AA; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     }; 
  ${props =>
    props.clickedNotCorrect
  && !props.gameView &&`background: #dc143c;; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     }; 
  ${props =>
    props.notClickedCorrect
  && !props.gameView &&`background: #20B2AA; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem; opacity: 0.5;` 
     }; 
  &:hover {
     ${props =>  
    props.gameView && ` color: #2F4F4F;` 
     };    
  }
  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
`
