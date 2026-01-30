// src/theme/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "./themes";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(
    localStorage.getItem("theme") || "Default"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const theme = THEMES[themeName] || THEMES.Default;

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        theme,
        setThemeName,
        themeList: Object.keys(THEMES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
};
