import React, { createContext, useContext, useState } from 'react';
import { IProviderProps } from '../../types';

type UserContextState = {
  userName: string;
  setUserName: (userName: string) => void;
};

const contextDefaultValues: UserContextState = {
  userName: "",
  setUserName: () => {}
};

export const UserContext = createContext<UserContextState>(
  contextDefaultValues
);

export const UserProvider = ({ children }: IProviderProps) => {
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
