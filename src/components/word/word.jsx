import React from "react"
import { StyledText } from "./styles"

const Word = ({ gameView, clickedWords, correctWords, onWordCliked }) => {
  return (
    <>
      {clickedWords?.map((word, index) => (
        <StyledText
          active={word.clicked}
          gameView={gameView}
          clickedCorrect={correctWords?.some(
            item => item === word.word && word.clicked
          )}
          clickedNotCorrect={correctWords?.every(
            item => item !== word.word && word.clicked
          )}
          notClickedCorrect={correctWords?.some(
            item => item === word.word && !word.clicked
          )}
          key={index}
          onClick={() => gameView && onWordCliked(word.word, index)}
        >
          {word.word}
        </StyledText>
      ))}
    </>
  )
}
export default Word
