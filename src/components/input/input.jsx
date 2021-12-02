import React from "react"
import { StyledInput, StyledLabel } from "./styles"
import Error from "../error"

const Input = ({ title, label, placeholder, value, error, onChange }) => {
  return (
    <>
      <StyledLabel htmlFor={title}>{label}</StyledLabel>
      <StyledInput
        id={title}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />  
      <Error error={error} />
    </>
  )
}

export default Input
