import React from 'react';
import { WordsProvider } from './context/wordsProvider';
import { UserProvider } from './context/userProvider';
import { MaxPointsProvider } from './context/maxPointsProvider';
import { PointsProvider } from './context/pointsProvider';
import { ClickedWordsProvider } from './context/clickedWordsContext';

export const Provider = ({ children }) => {
  return (
    <WordsProvider>
      <UserProvider>
        <ClickedWordsProvider>
          <PointsProvider>
            <MaxPointsProvider>{children}</MaxPointsProvider>
          </PointsProvider>
        </ClickedWordsProvider>
      </UserProvider>
    </WordsProvider>
  );
};
