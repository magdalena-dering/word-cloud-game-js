import React, { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { ClickedWordsContext } from "../../context/clickedWordsContext."
import { PointsContext } from "../../context/pointsContext"
import { StyledHeader, Paragraph } from "./styles"
import Link from "../link"
import Title from "../title"

const Header = ({ link, linkTo, linkText, title, user }) => {
  const { userName } = useContext(UserContext)
  const { setClickedWords } = useContext(ClickedWordsContext)
  const { setPoints } = useContext(PointsContext)

  const onLogOutClick = () => {
    setPoints(0)
    setClickedWords([])
  }

  return (
    <StyledHeader>
      {link && (
        <Link linkTo={linkTo} linkText={linkText} onClick={onLogOutClick} />
      )}
      {user && <Paragraph>User: {userName}</Paragraph>}
      <Title title={title} />
    </StyledHeader>
  )
}

export default Header
