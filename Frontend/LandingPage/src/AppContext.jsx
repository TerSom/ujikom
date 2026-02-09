import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeModule, setActiveModule] = useState("");

  return (
    <AppContext.Provider value={{ activeModule, setActiveModule }}>
      {children}
    </AppContext.Provider>
  );
}
