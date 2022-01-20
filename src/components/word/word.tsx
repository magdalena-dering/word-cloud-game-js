import React from 'react';
import { StyledText } from './styles';

interface IWordProps {
  gameView: string;
  clickedWords: string[];
  correctWords: string[];
  onWordClick: (word: string, index: number) => void;
}

const Word = ({
  gameView,
  clickedWords,
  correctWords,
  onWordClick,
}: IWordProps) => {
  return (
    <>
      {clickedWords?.map((word, index) => (
        <StyledText
          data-testid="word"
          active={word.clicked}
          gameView={gameView}
          clickedCorrect={correctWords?.some(
            (item) => item === word.word && word.clicked,
          )}
          clickedNotCorrect={correctWords?.every(
            (item) => item !== word.word && word.clicked,
          )}
          notClickedCorrect={correctWords?.some(
            (item) => item === word.word && !word.clicked,
          )}
          key={index}
          onClick={() => gameView && onWordClick(word.word, index)}
        >
          {word.word}
        </StyledText>
      ))}
    </>
  );
};
export default Word;