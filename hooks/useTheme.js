import {useState, useEffect} from 'react';

export const useTheme = () => {
  const[theme, setTheme] = useState('');
  useEffect(() => {
    // createScript();
    const localTheme = window.localStorage.getItem('theme');
    if(!localTheme) {
      const darkOs = window.matchMedia("prefers-color-schema").matches ? "light" : "dark";
      setTheme(darkOs);
      window.localStorage.setItem('theme', darkOs);
    } else {
      setTheme(localTheme);
    }
  }, []);

  const themeChange = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  return {
    theme,
    themeChange
  };

}

