"use client";

import { createContext, useContext } from "react";

type FocusContextType = {
  focusNameInput: () => void;
};

export const FocusContext = createContext<FocusContextType | null>(null);

export const useFocus = () => {
  const ctx = useContext(FocusContext);
  if (!ctx) {
    throw new Error("useFocus must be used within FocusContext.Provider");
  }
  return ctx;
};
