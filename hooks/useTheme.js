import {useState} from 'react';
import appTheme from "utils/theme";

export default function({Component, router}) {
  const [dynamicPageThemes, setDynamicPageThemes] = useState([]);

  const getDynamicPageTheme = () => {
    const {route} = router;
    const dynamicPageTheme = dynamicPageThemes.find(
      pageTheme => pageTheme.route === route
    );

    return dynamicPageTheme ? dynamicPageTheme.dynamicTheme : {};
  }

  const updateTheme = dynamicTheme => {
    const {route} = router;
    const pageIndex = dynamicPageThemes.findIndex(page => page.route === route);
    if (pageIndex === -1) setDynamicPageThemes([...dynamicPageThemes, {route, dynamicTheme}])
    else dynamicPageThemes[pageIndex] = { route, dynamicTheme };

  }

  const dynamicTheme = getDynamicPageTheme();
  const {pageTheme} = Component;
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