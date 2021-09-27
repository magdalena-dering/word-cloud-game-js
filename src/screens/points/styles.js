import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  color: #5f9ea0;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`
export const Paragraph = styled.p`
  color: #008080;
  font-size: 18px;
  text-align: center;
  padding: 0.5rem 0;
`
export const PointsContainer = styled.div`
  max-width: 600px;
  max-height: 600px;
  padding: 2rem;
  border: 2px solid #20b2aa;
  border-radius: 2rem;
  box-shadow: rgb(50 50 93 / 10%) 0px 15px 35px, rgb(0 0 0 / 7%) 0px 5px 15px;
`
