import {useState, useEffect} from "react";
import appTheme from "utils/theme/theme";
import customTheme from "utils/theme/alternatetheme";

export default function(route, pageTheme) {
  const [dynamicPageThemes, setDynamicPageThemes] = useState([]);
  const [dynamicTheme, setDynamicTheme] = useState({});

  useEffect(() => {
      const localTheme = localStorage.getItem('theme');

      if(localTheme) {
        switch(localTheme) {
          case "purple":
            updateTheme(customTheme['purple']);
            break;
          case 'green':
            updateTheme(customTheme['green']);
            break;
          default:
            console.log('nonono')
            break;
        }
      }


  }, [dynamicTheme])

  const updateThemeVal = () => {
    const dynamicPageTheme = dynamicPageThemes.find(
        pageTheme => pageTheme.route === route
    );
    setDynamicTheme(dynamicPageTheme ? dynamicPageTheme.dynamicTheme : {})
  }

  const updateTheme = dynamicTheme => {
    const pageIndex = dynamicPageThemes.findIndex(page => page.route === route);
    if (pageIndex === -1) setDynamicPageThemes([...dynamicPageThemes, {route, dynamicTheme}])
    else dynamicPageThemes[pageIndex] = { route, dynamicTheme };
    updateThemeVal();
  }

    // _app level theme variables, wrapping the entire layout
    const theme = {
      // Theme variables defined in /src/components
      ...appTheme,
      // Add any theme variables provided by the page/route level component
      ...pageTheme,
      // Override any static page variables with dynamically set variables
      ...dynamicTheme
    };
    return {theme, updateTheme}
}