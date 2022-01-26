import { Link } from "react-router-dom"
import styled from "styled-components"
import { palette } from '../../constants/palette'

const { cadetblue, teal, lightseagreen } = palette

export const StyledLink = styled(Link)`
  color: ${cadetblue};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
`
export const Paragraph = styled.p<{bold?: boolean}>`
  color: ${teal};
  font-size: 18px;
  ${props =>  
    props.bold && `font-weight: bold;`
   }; 
  text-align: center;
  padding: 0.5rem 0;
`
export const PointsContainer = styled.div`
  max-width: 600px;
  max-height: 600px;
  padding: 2rem;
  border: 2px solid ${lightseagreen};
  border-radius: 2rem;
  box-shadow: rgb(50 50 93 / 10%) 0px 15px 35px, rgb(0 0 0 / 7%) 0px 5px 15px;
`
