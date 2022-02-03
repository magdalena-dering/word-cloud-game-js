import React, { createContext, useContext, useState } from 'react';
import { IData, IProviderProps } from '../../types';

type WordsContextState = {
  clickedWords: [],
  setClickedWords: (words: IData["data"]) => IData["data"],
};

const contextDefaultValues: WordsContextState = {
  clickedWords: [],
  setClickedWords: () => [
    {
      question: {},
      all_words: [],
      good_words: [],
    }
  ]
};

export const ClickedWordsContext = createContext<WordsContextState>(
  contextDefaultValues
);

export const ClickedWordsProvider = ({ children }: IProviderProps) => {
  const [clickedWords, setClickedWords] = useState<IData["data"]>([]);
  return (
    <ClickedWordsContext.Provider value={{ clickedWords, setClickedWords }}>
      {children}
    </ClickedWordsContext.Provider>
  );
};

export const useWordsContext = () => useContext(ClickedWordsContext);
