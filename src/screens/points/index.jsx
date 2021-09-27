import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { PointsContext } from "../../context/pointsContext"
import MainContainer from "../../components/mainContainer"
import Header from "../../components/header"
import { Paragraph, PointsContainer } from "./styles"

const Points = () => {
  const { userName } = useContext(UserContext)
  const { points } = useContext(PointsContext)
  return (
    <>
      <Header link linkTo="/" linkText="Log out" title="Points" />
      <MainContainer center>
        <PointsContainer>
          <Paragraph>User: {userName}</Paragraph>
          <Paragraph>Points: {points < 0 ? 0 : points}</Paragraph>
        </PointsContainer>
      </MainContainer>
    </>
  )
}

export default Points
