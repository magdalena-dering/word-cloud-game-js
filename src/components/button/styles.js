import styled from "styled-components"
import { palette } from '../../constants/palette'

const { white, darkcyan, cadetblue, dimgray } =  palette

export const StyledButton = styled.button`
  color: ${white};
  font-size: 15px;
  font-weight: 600; 
  line-height: 40px;
  padding: 0 14px;
  border-radius: 2rem;
  border: 2px solid ${darkcyan};
  background: #5f9ea0;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  cursor: pointer;
  box-sizing: content-box;
  ${props =>
    props.disabled
      ? `opacity: 0.5; text-decoration: line-through`
      : `background: ${cadetblue}`};
  &:hover {
    background: ${darkcyan};
  }
  &:focus {
    border: 2px solid ${dimgray}};
  }
`
