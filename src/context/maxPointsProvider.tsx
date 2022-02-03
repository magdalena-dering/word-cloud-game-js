import React, { createContext, useContext, useState } from 'react';
import { IProviderProps } from '../../types';

type MaxPointsContextState = {
  maxPoints: number;
  // Which solution is correctly?
  // setMaxPoints: Dispatch<SetStateAction<number>>;
  setMaxPoints: (maxPoints: number) => void;
};

const contextDefaultValues: MaxPointsContextState = {
  maxPoints: 0,
  setMaxPoints: () => 0
};

export const MaxPointsContext = createContext<MaxPointsContextState>(
  contextDefaultValues
);

export const MaxPointsProvider = ({ children }: IProviderProps) => {
  const [maxPoints, setMaxPoints] = useState(0);
  return (
    <MaxPointsContext.Provider value={{ maxPoints, setMaxPoints }}>
      {children}
    </MaxPointsContext.Provider>
  );
};

export const useMaxPointsContext = () => useContext(MaxPointsContext);
