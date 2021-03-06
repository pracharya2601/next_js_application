import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";

import useTheme from 'hooks/useTheme';

import GlobalStyles from "components/GlobalStyles";
import LanguageState from 'context/language';

import WebsiteLayout from "layout";


const AppComponent = ({Component, pageProps, router}) => {
    const {route} = router;
    const {pageTheme} = Component;
    const {theme, updateTheme} = useTheme(route, pageTheme);
    return(
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <LanguageState>
                <WebsiteLayout>
                    <Component {...pageProps} updateTheme={updateTheme}/>
                </WebsiteLayout>
                </LanguageState>
            </ThemeProvider>
        </>
    )
}

AppComponent.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};  
  if(ctx.req) {
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }
    }

    return {pageProps};
};

export default AppComponent;