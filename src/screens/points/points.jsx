import { useContext } from "react"
import Confetti from "react-confetti"
import useWindowSize from "../../utils/useWindowSize"
import { UserContext } from "../../context/userContext"
import { PointsContext } from "../../context/pointsContext"
import { MaxPointsContext } from "../../context/maxPointsContext"
import { Paragraph, PointsContainer } from "./styles"
import MainContainer from "../../components/mainContainer"
import Header from "../../components/header"

const Points = () => {
  const { userName } = useContext(UserContext)
  const { points } = useContext(PointsContext)
  const { maxPoints } = useContext(MaxPointsContext)
  const { width, height } = useWindowSize()

  return (
    <>
      {maxPoints && (
        <Confetti
          width={width}
          height={height}
          opacity={0.2}
          numberOfPieces={25}
        />
      )}
      <Header link linkTo="/" linkText="Log out" title="Points" />
      <MainContainer center>
        <PointsContainer>
          <Paragraph>User: {userName}</Paragraph>
          <Paragraph>Points: {points < 0 ? 0 : points}</Paragraph>
          {maxPoints && (
            <Paragraph bold>Congrats, you get the MAX points!!!</Paragraph>
          )}
        </PointsContainer>
      </MainContainer>
    </>
  )
}

export default Points
