import { createContext } from "preact";
import { useState, useContext, useEffect } from "preact/hooks";
import Cookies from "js-cookie";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    Cookies.get("theme") || "Dark"
  );

  useEffect(() => {
    Cookies.set("theme", currentTheme, { expires: 365, path: "/" });
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
