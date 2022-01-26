import React, { createContext, useContext, useState } from 'react';
import { IProviderProps } from '../../types';

export type PointsContextState = {
  points: number;
  setPoints: (points: number) => void;
};

const contextDefaultValues: PointsContextState = {
  points: 0,
  setPoints: () => 0
};

export const PointsContext = createContext<PointsContextState>(
  contextDefaultValues
);

export const PointsProvider = ({ children }: IProviderProps) => {
  const [points, setPoints] = useState(0);
  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePointsContext = () => useContext(PointsContext);
