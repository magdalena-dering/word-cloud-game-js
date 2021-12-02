import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFetch } from '../hooks/useFetch';

export const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
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
