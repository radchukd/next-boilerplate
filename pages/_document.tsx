import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class WebAppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebAppDocument;
