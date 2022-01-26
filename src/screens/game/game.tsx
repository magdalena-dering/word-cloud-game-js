import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { WordsContext } from '../../context/wordsProvider';
import { ClickedWordsContext } from '../../context/clickedWordsContext';
import { PointsContext } from '../../context/pointsProvider';
import { MaxPointsContext } from '../../context/maxPointsProvider';
import { GameWrapper, ButtonWrapper } from './styles';
import GameContainer from '../../components/gameContainer';
import Word from '../../components/word';
import MainContainer from '../../components/mainContainer';
import Header from '../../components/header';
import Button from '../../components/button';
import Error from '../../components/error';
import Loader from '../../components/loader';

const Game = () => {
  const multiplying = 2;
  const [error, setError] = useState<string>('');
  const [clickedCorrect, setClickedCorrect] = useState<number>(0);
  const [clickedNotCorrect, setClickedNotCorrect] = useState<number>(0);
  const [notClickedCorrect, setNotClickedCorrect] = useState<number>(0);
  const [gameView, setGameView] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const { words } = useContext(WordsContext);
  const { clickedWords } = useContext(ClickedWordsContext);
  const { setClickedWords } = useContext(ClickedWordsContext);
  const { setPoints } = useContext(PointsContext);
  const { setMaxPoints } = useContext(MaxPointsContext);
  // TODO: by running tests 'words' is undefined
  // const { all_words, words.question, good_words } = words;

  const history = useHistory();

  useEffect(() => {
    setClickedWords(
      words?.all_words?.map((word: string) =>
        Object.assign(
          { word: word, clicked: false },
          words?.all_words[word],
        ),
      ),
    );
  }, [words?.all_words, setClickedWords]);

  const onWordClick = (word: string) => {
    setClickedWords(
      clickedWords.map((i: { word: string; clicked: boolean }) => {
        return i.word === word
          ? {
            ...i,
            clicked: !i.clicked,
          }
          : i;
      }),
    );
    setError('');
    setDisabled(false);
  };

  const onCheckButtonClick = () => {
    if (
      clickedWords?.every((i: { clicked: boolean }) => !i.clicked)
    ) {
      return (
        setDisabled(true), setError('Click at least one word :)')
      );
    } else {
      setGameView(false);
    }

    setClickedCorrect(
      clickedWords
        ?.map((x: { word: string; clicked: boolean }) =>
          words?.good_words?.filter(
            (y: string) => y === x.word && x.clicked,
          ),
        )
        .flat().length,
    );
    setClickedNotCorrect(
      clickedWords
        ?.map((x: { word: string; clicked: boolean }) =>
          words?.good_words?.every(
            (y: string) => y !== x.word && x.clicked,
          ),
        )
        ?.filter((i: string) => i).length,
    );
    setNotClickedCorrect(
      clickedWords
        ?.map((x: { word: string; clicked: boolean }) =>
          words?.good_words?.some(
            (y: string) => y === x.word && !x.clicked,
          ),
        )
        ?.filter((i: string) => i).length,
    );
  };

  const onFinishButtonClick = () => {
    history.push('/points');
    setPoints(
      multiplying * clickedCorrect -
      (clickedNotCorrect + notClickedCorrect),
    );
    setMaxPoints(
      clickedCorrect === words?.good_words.length &&
      !clickedNotCorrect,
    );
  };

  return words ? (
    <>
      <Header
        link
        linkTo="/"
        linkText="Log out"
        title={
          gameView ? words.question : 'Review of ' + words.question
        }
        user
      />
      <MainContainer>
        <GameWrapper>
          <GameContainer>
            {gameView ? (
              <Word
                clickedWords={clickedWords}
                gameView
                onWordClick={onWordClick} />
            ) : (
              <Word
                clickedWords={clickedWords}
                correctWords={words?.good_words} />
            )}
          </GameContainer>
        </GameWrapper>
        <Error error={error} />
        <ButtonWrapper>
          {gameView ? (
            <Button
              text="Check"
              onClick={onCheckButtonClick}
              disabled={disabled}
            />
          ) : (
            <Button
              text="Finish game"
              onClick={onFinishButtonClick}
            />
          )}
        </ButtonWrapper>
      </MainContainer>
    </>
  ) : (
    <Loader />
  );
};

export default Game;
