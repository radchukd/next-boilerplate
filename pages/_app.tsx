import { Provider } from "next-auth/client";
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
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Head>
              <title>Title</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link
                rel="shortcut icon"
                href="/favicon.ico"
                type="image/x-icon"
              />
              <meta name="Description" />
              <meta charSet="utf-8" />
            </Head>

            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default appWithTranslation(WebApp);
