import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import appTheme from "utils/theme";
import GlobalStyles from "components/GlobalStyles";
import WebsiteLayout from "layout";

import getDynamicPageTheme from 'utils/app/getDynaicPageTheme';

const AppComponent = ({Component, pageProps, router}) => {
    const [dynamicPageThemes, setDynamicPageThemes] = useState([]);

    const updateTheme = dynamicTheme => {
        const {route} = router;
        const pageIndex = dynamicPageThemes.findIndex(page => page.route === route);
        if (pageIndex === -1) setDynamicPageThemes([...dynamicPageThemes, {route, dynamicTheme}])
        else dynamicPageThemes[pageIndex] = { route, dynamicTheme };
    
      }
    const dynamicTheme = getDynamicPageTheme(dynamicPageThemes, router.route);
    const {pageTheme} = Component;
    const theme = {
    // Theme variables defined in /src/components
    ...appTheme,
    // Add any theme variables provided by the page/route level component
    ...pageTheme,
    // Override any static page variables with dynamically set variables
    ...dynamicTheme
    };

    return(
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <WebsiteLayout>
                    <Component {...pageProps} updateTheme={updateTheme}/>
                </WebsiteLayout>
            </ThemeProvider>
        </>
    )
}

AppComponent.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {};
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps};
};

export default AppComponent;