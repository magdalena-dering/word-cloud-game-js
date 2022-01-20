import styled from "styled-components"
import { palette } from '../../constants/palette'
import { withProps } from '../../withProps'

const { dimgray, darkslategray, lightseagreen, red } = palette

interface Props {
  gameView?: any;
  active?: boolean;
  clickedCorrect?: any;
  clickedNotCorrect?: any;
  notClickedCorrect?: any;
}
export const StyledText = withProps<Props>()(styled.p)`
  color: ${dimgray};
  font-size: 15px;
  padding: 0.5rem;
  margin: 2rem;
  ${props =>  
    props.gameView ? `cursor: pointer` : `cursor: default` 
     };   
  ${props =>
    props.active
      && props.gameView &&`color: ${lightseagreen}; font-weight: bold; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     };
  ${props =>
    props.clickedCorrect
  && !props.gameView &&`background: ${lightseagreen}; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     }; 
  ${props =>
    props.clickedNotCorrect
  && !props.gameView &&`background: ${red}; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem;` 
     }; 
  ${props =>
    props.notClickedCorrect
  && !props.gameView &&`background: ${lightseagreen}; color: #fff; box-shadow: rgb(32 178 170 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px; border-radius: 2rem; opacity: 0.5;` 
     }; 
  &:hover {
     ${props =>  
    props.gameView && ` color: ${darkslategray};` 
     };    
  }
  @media screen and (max-width: 600px) {
    margin: 1rem;
  }
`
