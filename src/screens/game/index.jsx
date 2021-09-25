import { useEffect, useState } from "react"
import GameContainer from "../../components/gameContainer"
import Word from "../../components/word"
import MainContainer from "../../components/mainContainer"
import Header from "../../components/header"
import { GameWrapper, ButtonWrapper } from "./styles"
import { data } from "../../App"
import Button from "../../components/button"
import Error from "../../components/error"

const Game = () => {
  const objData = data.all_words.map(word =>
    Object.assign({ word: word, clicked: false }, data.all_words[word])
  )
  const multiplying = 2
  const [clickedWords, setClickedWords] = useState(objData)
  const [error, setError] = useState(false)
  const [gameView, setGameView] = useState(true)
  const [clickedCorrect, setClickedCorrect] = useState(0)
  const [clickedNotCorrect, setClickedNotCorrect] = useState(0)
  const [notClickedCorrect, setNotClickedCorrect] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [countPoints, setCountPoints] = useState(0)

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
  const onButtonClick = () => {
    clickedWords.every(i => !i.clicked)
      ? setError("Click at least one word :)")
      : setGameView(false)

    setClickedCorrect(
      clickedWords
        ?.map(x => data.good_words?.filter(y => y === x.word && x.clicked))
        ?.flat().length
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

  useEffect(() => {
    setCountPoints(
      multiplying * clickedCorrect - (clickedNotCorrect + notClickedCorrect)
    )
  }, [clickedWords, clickedCorrect, clickedNotCorrect, notClickedCorrect])

  return (
    <>
      <Header
        link
        linkTo="/"
        linkText="Log out"
        title={gameView ? data.question : "Result"}
      />
      <MainContainer>
        <GameWrapper>
          <GameContainer>
            {gameView ? (
              <Word
                clickedWords={clickedWords}
                gameView={gameView}
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
          <Button
            text={gameView ? "Check" : "Finish game"}
            onClick={onButtonClick}
          />
        </ButtonWrapper>
      </MainContainer>
    </>
  )
}

export default Game
