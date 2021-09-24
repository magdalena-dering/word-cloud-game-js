import { StyledInput, StyledLabel } from "./styles"
import Error from "../error"

const Input = ({ title, label, placeholder, text, error, onChange }) => {
  return (
    <>
      <StyledLabel htmlFor={title}>{label}</StyledLabel>
      <StyledInput
        id={title}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      >
        {text}
      </StyledInput>
      <Error error={error} />
    </>
  )
}

export default Input
