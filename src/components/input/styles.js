import styled from "styled-components"
import { palette } from '../../constants/palette'

const { dimgray, teal } = palette;

export const StyledInput = styled.input`
  color: ${dimgray};
  min-width: 250px;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 2rem;
  border: 2px solid #dcdcdc;
  background: #fff;
  box-shadow: rgb(50 50 93 / 11%) 0px 4px 6px, rgb(0 0 0 / 8%) 0px 1px 3px;
  &:focus {
    border: 2px solid ${dimgray};
    outline: none;
  }
`
export const StyledLabel = styled.label`
  color: ${teal};
  font-size: 15px;
  display: block;
`