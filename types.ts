import { ReactNode } from "react";

export interface IData {
  data: [
    {
      question: {},
      all_words: string[],
      good_words: string[],
    }
  ]
}

export interface IProviderProps {
  children: ReactNode;
}