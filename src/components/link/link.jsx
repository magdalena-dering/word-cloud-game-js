import React from "react"
import { StyledLink } from "./styles"

const Link = ({ linkTo, linkText, onClick }) => {
  return (
    <StyledLink to={linkTo} onClick={onClick}>
      {linkText}
    </StyledLink>
  )
}

export default Link
