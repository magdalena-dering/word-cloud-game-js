import styled from "styled-components"
import { palette } from '../../constants/palette'

const { lightseagreen } =  palette

export const StyledContainer = styled.div`
  max-width: 600px;
  max-height: 600px;
  align-content: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px solid ${lightseagreen};
  border-radius: 2rem;
  box-shadow: rgb(50 50 93 / 10%) 0px 15px 35px, rgb(0 0 0 / 7%) 0px 5px 15px;
`
