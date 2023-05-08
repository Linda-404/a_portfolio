// import '@/styles/globals.css'
import '@/styles/style.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {/* <Head>
        <title>Linda Portfolio</title>
        <meta name="description" content="Lindas portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Component {...pageProps} />
    </div>
  );
}
