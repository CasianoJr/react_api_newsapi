import React, { createContext, useContext, useReducer } from "react";
import { ACTION, initialState, newsReducer } from "./NewsReducer";

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

export default function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, initialState);
  const value = { ACTION, state, dispatch };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}
