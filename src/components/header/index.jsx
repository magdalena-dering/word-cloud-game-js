import { StyledHeader } from "./styles"
import Link from "../link"
import Title from "../title"

const Header = ({ link, linkTo, linkText, user, title }) => {
  return (
    <StyledHeader>
      {link && <Link linkTo={linkTo} linkText={linkText} />}
      <Title title={title} />
      <p>{user}</p>
    </StyledHeader>
  )
}

export default Header
