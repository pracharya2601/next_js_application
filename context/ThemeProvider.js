import {useState, useEffect, createContext} from 'react';

export const themeContext = createContext({
  theme: "light"
}); 

export const ThemeProvider = ({children}) => {
  const[theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if(!localTheme) {
      const darkOs = window.matchMedia("prefers-color-schema").matches ? "light" : "dark";
      setTheme(darkOs);
      window.localStorage.setItem('theme', darkOs);
    } else {
      setTheme(localTheme);
    }
  }, []);

  const provider = {
    theme,
    themeChange: () => {
      const nextTheme = theme === "light" ? "dark" : "light";
      setTheme(nextTheme);
      window.localStorage.setItem('theme', nextTheme);
    }
  }
  return (
    <themeContext.Provider
      value={provider}
    >
      {children}
    </themeContext.Provider>
  )

}