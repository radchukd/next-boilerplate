import App from "next/app";
import Head from "next/head";
import React from "react";

class WebApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="Description" />
          <meta charSet="utf-8" />
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default WebApp;
