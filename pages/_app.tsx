import { appWithTranslation } from "next-i18next";
import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "@constants/theme";

class WebApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Title</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="Description" />
            <meta charSet="utf-8" />
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(WebApp);
