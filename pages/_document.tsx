import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Weather App</title>
          <meta charSet="UTF-8"></meta>
          <meta
            name="viewport"
            content="minimum-scale=1, width=device-width, initial-scale=1 ,shrink-to-fit=no, viewport-fit=cover"
          ></meta>
          <meta
            name="description"
            content="Weather App created by Klaudia Zygmunt"
          />
          <meta name="keywords" content="WEATHER APP PROJECT" />
          <link rel="icon" href="/logo_icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
