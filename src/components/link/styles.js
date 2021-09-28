import styled from "styled-components"
import { Link } from "react-router-dom"
import { palette } from '../../constants/palette'

const { cadetblue } = palette

export const StyledLink = styled(Link)`
  color: ${cadetblue};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`