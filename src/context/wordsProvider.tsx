//@ts-nocheck
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFetch } from '../hooks/useFetch';
import { IData, IProviderProps } from '../../types';

type WordsContextState = {
  words: null;
  setWords: () => IData["data"],
};

const contextDefaultValues: WordsContextState = {
  words: null,
  setWords: () => [
    {
      question: {},
      all_words: [],
      good_words: [],
    }
  ]
};

export const WordsContext = createContext<WordsContextState>(
  contextDefaultValues
);

export const WordsProvider = ({ children }: IProviderProps) => {
  const [words, setWords] = useState([]);
  const { data } = useFetch('data.json');

  useEffect(() => {
    setWords(data[(data?.length * Math.random()) | 0]);
  }, [data]);

  return (
    <WordsContext.Provider value={{ words, setWords }}>
      {children}
    </WordsContext.Provider>
  );
};

export const useWordsContext = () => useContext(WordsContext);
