import Head from 'next/head';
import { MainLayout } from '../components/layouts/MainLayout';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Head>
        <title>James Ng</title>
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
