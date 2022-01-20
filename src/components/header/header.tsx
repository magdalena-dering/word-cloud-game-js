import React, { useContext } from 'react';
import { UserContext } from '../../context/userProvider';
import { ClickedWordsContext } from '../../context/clickedWordsContext';
import { PointsContext } from '../../context/pointsProvider';
import { WordsContext } from '../../context/wordsProvider';
import { useFetch } from '../../hooks/useFetch';
import { StyledHeader, Paragraph } from './styles';
import Link from '../link';
import Title from '../title';

// TODO: Fix warning - Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

interface HeaderProps {
  link?: boolean;
  linkTo: string;
  linkText?: string;
  title?: string;
  user?: boolean;
}

const Header = ({
  link,
  linkTo,
  linkText,
  title,
  user,
}: HeaderProps) => {
  const { userName } = useContext(UserContext);
  const { setClickedWords } = useContext(ClickedWordsContext);
  const { setPoints } = useContext(PointsContext);
  const { setWords } = useContext(WordsContext);
  const { data } = useFetch('data.json');

  const onLogOutClick = () => {
    setPoints(0);
    setClickedWords([]);
    setWords(data[(data?.length * Math.random()) | 0]);
  };

  return (
    <StyledHeader>
      {link && (
        <Link
          linkTo={linkTo}
          linkText={linkText}
          onClick={onLogOutClick}
        />
      )}
      {user && (
        <Paragraph data-testid="user-name">
          User: {userName}
        </Paragraph>
      )}
      <Title title={title} />
    </StyledHeader>
  );
};

export default Header;
