"use client";

import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { navItems } from "@/lib/data";

type SectionTitle = (typeof navItems)[number]["title"];

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionTitle;
  setActiveSection: Dispatch<SetStateAction<SectionTitle>>;
} | null;

const ActiveSectionContext = createContext<ActiveSectionContextType>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionTitle>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}{" "}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext should be used inside of ActiveSectionContextProvider"
    );
  }

  return context;
};
