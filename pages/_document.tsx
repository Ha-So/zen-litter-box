import Document, { Html, Head, Main, NextScript } from "next/document";
import loader from "../values/loader.js";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  googleAnalyticsURL =
    "https://www.googletagmanager.com/gtag/js?id=" +
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="preload"
            as="style"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <style>{loader}</style>
        </Head>
        <body>
          <div id={"globalLoader"}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
