import { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { DataContext } from "../../context/dataContext"
import { ClickedWordsContext } from "../../context/clickedWordsContext."
import { PointsContext } from "../../context/pointsContext"
import { MaxPointsContext } from "../../context/maxPointsContext"
import { GameWrapper, ButtonWrapper } from "./styles"
import GameContainer from "../../components/gameContainer"
import Word from "../../components/word"
import MainContainer from "../../components/mainContainer"
import Header from "../../components/header"
import Button from "../../components/button"
import Error from "../../components/error"
import Loader from "../../components/loader"

const Game = () => {
  const multiplying = 2
  const [error, setError] = useState(false)
  const [clickedCorrect, setClickedCorrect] = useState(0)
  const [clickedNotCorrect, setClickedNotCorrect] = useState(0)
  const [notClickedCorrect, setNotClickedCorrect] = useState(0)
  const [gameView, setGameView] = useState(true)
  const { dataContext } = useContext(DataContext)
  const { clickedWords } = useContext(ClickedWordsContext)
  const { setClickedWords } = useContext(ClickedWordsContext)
  const { setPoints } = useContext(PointsContext)
  const { setMaxPoints } = useContext(MaxPointsContext)
  const { all_words, question, good_words } = dataContext
  const history = useHistory()

  useEffect(() => {
    setClickedWords(
      all_words.map(word =>
        Object.assign({ word: word, clicked: false }, all_words[word])
      )
    )
  }, [all_words, setClickedWords])

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
        ?.map(x => good_words?.filter(y => y === x.word && x.clicked))
        .flat().length
    )
    setClickedNotCorrect(
      clickedWords
        ?.map(x => good_words?.every(y => y !== x.word && x.clicked))
        ?.filter(i => i).length
    )
    setNotClickedCorrect(
      clickedWords
        ?.map(x => good_words?.some(y => y === x.word && !x.clicked))
        ?.filter(i => i).length
    )
  }

  const onFinishButtonClick = () => {
    history.push("/points")
    setPoints(
      multiplying * clickedCorrect - (clickedNotCorrect + notClickedCorrect)
    )
    setMaxPoints(clickedCorrect === good_words.length && !clickedNotCorrect)
  }

  return dataContext ? (
    <>
      <Header
        link
        linkTo="/"
        linkText="Log out"
        title={gameView ? question : "Review of " + question}
        user
      />
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
              <Word clickedWords={clickedWords} correctWords={good_words} />
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
  ) : (
    <Loader />
  )
}

export default Game
