import React, { createContext, useContext, useState } from 'react';

export const MaxPointsContext = createContext();

export const MaxPointsProvider = ({ children }) => {
  const [maxPoints, setMaxPoints] = useState([]);
  return (
    <MaxPointsContext.Provider value={{ maxPoints, setMaxPoints }}>
      {children}
    </MaxPointsContext.Provider>
  );
};

export const useMaxPointsContext = () => useContext(MaxPointsContext);
