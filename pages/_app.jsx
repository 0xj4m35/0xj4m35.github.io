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
        {/* Twitter Card */}
        <meta content='summary_large_image' name='twitter:card' />
        <meta content='@james_ng_th' name='twitter:site' />
        <meta content='The Uranus' name='twitter:title' />
        <meta
          content="The Uranus's personal website."
          name='twitter:description'
        />
        <meta content='/meta-image.jpg' name='twitter:image' />
        {/* Twitter Card */}

        {/* Open Graph*/}
        <meta content='The Uranus' property='og:title' />
        <meta
          content="The Uranus's personal website."
          property='og:description'
        />
        <meta content='/meta-image.jpg' property='og:image' />
        <meta content='website' property='og:type' />
        <meta content='TheUranus' property='og:site_name' />
        {/* Open Graph*/}
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
