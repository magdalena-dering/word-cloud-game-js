import React, { createContext, useContext, useState } from 'react';

export const ClickedWordsContext = createContext();

export const ClickedWordsProvider = ({ children }) => {
  const [clickedWords, setClickedWords] = useState([]);
  return (
    <ClickedWordsContext.Provider value={{ clickedWords, setClickedWords }}>
      {children}
    </ClickedWordsContext.Provider>
  );
};

export const useWordsContext = () => useContext(ClickedWordsContext);
