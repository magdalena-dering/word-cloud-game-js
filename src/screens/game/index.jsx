import { useState } from "react"
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

  const [clickedWords, setClickedWords] = useState(objData)
  const [error, setError] = useState(false)
  const [gameView, setGameView] = useState(true)

  const onWordCliked = word => {
    setClickedWords(
      clickedWords.map(item => {
        return item.word === word
          ? {
              ...item,
              clicked: !item.clicked,
            }
          : item
      })
    )
    setError("")
  }
  const onButtonClick = () => {
    return clickedWords.every(item => item.clicked === false)
      ? setError("Click at least one word :)")
      : setGameView(false)
  }

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
