import { useState, useContext } from "react"
import { useHistory } from "react-router"
import { ClickedWordsContext } from "../../context/clickedWordsContext."
import { PointsContext } from "../../context/pointsContext"
import { data } from "../../App"
import GameContainer from "../../components/gameContainer"
import Word from "../../components/word"
import MainContainer from "../../components/mainContainer"
import Header from "../../components/header"
import { GameWrapper, ButtonWrapper } from "./styles"
import Button from "../../components/button"
import Error from "../../components/error"

const Game = () => {
  const multiplying = 2

  const [error, setError] = useState(false)
  const [clickedCorrect, setClickedCorrect] = useState(0)
  const [clickedNotCorrect, setClickedNotCorrect] = useState(0)
  const [notClickedCorrect, setNotClickedCorrect] = useState(0)
  const [gameView, setGameView] = useState(true)
  const { clickedWords } = useContext(ClickedWordsContext)
  const { setClickedWords } = useContext(ClickedWordsContext)
  const { setPoints } = useContext(PointsContext)
  const history = useHistory()

  const onWordCliked = word => {
    setClickedWords(
      clickedWords.map(i => {
        return i.word === word
          ? {
              ...i,
              clicked: !i.clicked,
            }
          : i
      })
    )
    setError("")
  }

  const onCheckButtonClick = () => {
    clickedWords.every(i => !i.clicked)
      ? setError("Click at least one word :)")
      : setGameView(false)

    setClickedCorrect(
      clickedWords
        ?.map(x => data.good_words?.filter(y => y === x.word && x.clicked))
        .flat().length
    )
    setClickedNotCorrect(
      clickedWords
        ?.map(x => data.good_words?.every(y => y !== x.word && x.clicked))
        ?.filter(i => i).length
    )
    setNotClickedCorrect(
      clickedWords
        ?.map(x => data.good_words?.some(y => y === x.word && !x.clicked))
        ?.filter(i => i).length
    )
  }

  const onFinishButtonClick = () => {
    history.push("/points")
    setPoints(
      multiplying * clickedCorrect - (clickedNotCorrect + notClickedCorrect)
    )
  }

  return (
    <>
      <Header link linkTo="/" linkText="Log out" title={data.question} user />
      <MainContainer>
        <GameWrapper>
          <GameContainer>
            {gameView ? (
              <Word
                clickedWords={clickedWords}
                gameView
                onWordCliked={onWordCliked}
              />
            ) : (
              <Word
                clickedWords={clickedWords}
                correctWords={data.good_words}
              />
            )}
          </GameContainer>
        </GameWrapper>
        <Error error={error} />
        <ButtonWrapper>
          {gameView ? (
            <Button text="Check" onClick={onCheckButtonClick} />
          ) : (
            <Button text="Finish game" onClick={onFinishButtonClick} />
          )}
        </ButtonWrapper>
      </MainContainer>
    </>
  )
}

export default Game
