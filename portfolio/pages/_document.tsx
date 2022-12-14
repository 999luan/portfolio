import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa&family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Luan C. Silva"></meta>
      </Head>
      <body className="bg-gradient-to-r from-purple-900 to-green-300 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
