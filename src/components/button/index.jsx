import React from "react"
import { StyledButton } from "./styles"

const Button = ({ disabled, text, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {text}
  </StyledButton>
)

export default Button
