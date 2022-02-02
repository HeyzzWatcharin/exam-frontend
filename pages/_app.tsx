import React from 'react';
import '../scss/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import useTranslation from '../hooks/useTranslation';
import NavbarHeader from '../components/molecule/navbar';
import { Container, Navbar } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  const { translate } = useTranslation();

  return (
    <>
      <Head>
        <title>{translate('NAVBAR_HEADER')}</title>
      </Head>
      <NavbarHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
