"use client";

import { createContext, useReducer, useContext } from "react";

const initialState = { minPrice: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "setMinPrice":
      return { ...state, minPrice: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

const PriceContext = createContext();

export function PriceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PriceContext.Provider value={{ state, dispatch }}>
      {children}
    </PriceContext.Provider>
  );
}

export function usePrice() {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error("usePrice must be used within a PriceProvider");
  }
  return context;
}
