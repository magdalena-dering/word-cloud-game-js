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
  const [error, setError] = useState(false);
  const [clickedCorrect, setClickedCorrect] = useState(0);
  const [clickedNotCorrect, setClickedNotCorrect] = useState(0);
  const [notClickedCorrect, setNotClickedCorrect] = useState(0);
  const [gameView, setGameView] = useState(true);
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
      words?.all_words?.map((word) =>
        Object.assign(
          { word: word, clicked: false },
          words?.all_words[word],
        ),
      ),
    );
  }, [words?.all_words, setClickedWords]);

  const onWordClick = (word) => {
    setClickedWords(
      clickedWords.map((i) => {
        return i.word === word
          ? {
              ...i,
              clicked: !i.clicked,
            }
          : i;
      }),
    );
    setError('');
  };

  const onCheckButtonClick = () => {
    clickedWords?.every((i) => !i.clicked)
      ? setError('Click at least one word :)')
      : setGameView(false);

    setClickedCorrect(
      clickedWords
        ?.map((x) =>
          words?.good_words?.filter((y) => y === x.word && x.clicked),
        )
        .flat().length,
    );
    setClickedNotCorrect(
      clickedWords
        ?.map((x) =>
          words?.good_words?.every((y) => y !== x.word && x.clicked),
        )
        ?.filter((i) => i).length,
    );
    setNotClickedCorrect(
      clickedWords
        ?.map((x) =>
          words?.good_words?.some((y) => y === x.word && !x.clicked),
        )
        ?.filter((i) => i).length,
    );
  };

  const onFinishButtonClick = () => {
    history.push('/points');
    setPoints(
      multiplying * clickedCorrect -
        (clickedNotCorrect + notClickedCorrect),
    );
    setMaxPoints(
      clickedCorrect === words?.good_words.length && !clickedNotCorrect,
    );
  };

  return words ? (
    <>
      <Header
        link
        linkTo="/"
        linkText="Log out"
        title={gameView ? words.question : 'Review of ' + words.question}
        user
      />
      <MainContainer>
        <GameWrapper>
          <GameContainer>
            {gameView ? (
              <Word
                clickedWords={clickedWords}
                gameView
                onWordClick={onWordClick}
              />
            ) : (
              <Word
                clickedWords={clickedWords}
                correctWords={words?.good_words}
              />
            )}
          </GameContainer>
        </GameWrapper>
        <Error error={error} />
        <ButtonWrapper>
          {gameView ? (
            <Button text="Check" onClick={onCheckButtonClick} />
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
