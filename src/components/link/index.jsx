import { StyledLink } from "./styles"

const Link = ({ linkTo, linkText }) => {
  return <StyledLink to={linkTo}>{linkText}</StyledLink>
}

export default Link
