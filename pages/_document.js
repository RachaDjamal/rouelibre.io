import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
