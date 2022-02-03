import { ReactNode } from "react";

interface Test {
  question: {},
  all_words: string[],
  good_words: string[],

}

export interface IData {
  data: Test[]
}

export interface IProviderProps {
  children: ReactNode;
}