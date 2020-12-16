import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import appTheme from "utils/theme";
import GlobalStyles from "components/GlobalStyles";
import WebsiteLayout from "layout";

export default class WebApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  state = {
    dynamicPageThemes: []
  };

  updateTheme = dynamicTheme => {
    const { dynamicPageThemes } = this.state;
    const { route } = this.props.router;

    const pageIndex = dynamicPageThemes.findIndex(page => page.route === route);

    if (pageIndex === -1) dynamicPageThemes.push({ route, dynamicTheme });
    else dynamicPageThemes[pageIndex] = { route, dynamicTheme };

    this.setState({ dynamicPageThemes });
  };

  getDynamicPageTheme = () => {
    const { route } = this.props.router;
    const { dynamicPageThemes } = this.state;
    const dynamicPageTheme = dynamicPageThemes.find(
      pageTheme => pageTheme.route === route
    );

    return dynamicPageTheme ? dynamicPageTheme.dynamicTheme : {};
  };

  

  render() {
    const { Component, pageProps } = this.props;
    const { pageTheme } = Component;
    const dynamicTheme = this.getDynamicPageTheme();
    const theme = {
      ...appTheme,
      ...pageTheme,
      // Override any static page variables with dynamically set variables
      ...dynamicTheme
    };


    return (
        <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <WebsiteLayout>
            <Component {...pageProps} updateTheme={this.updateTheme} />
          </WebsiteLayout>
        </ThemeProvider>
        </>
    );
  }
}