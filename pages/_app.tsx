import { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import Head from 'next/head';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App created by Klaudia Zygmunt" />
        <meta name="keywords" content="WEATHER APP PROJECT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};