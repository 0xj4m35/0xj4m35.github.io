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
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@james_ng_th' />
        <meta name='twitter:creator' content='@james_ng_th' />
        <meta name='twitter:title' content='James Nguyen' />
        <meta
          name='twitter:description'
          content="James Nguyen's personal website."
        />
        <meta
          name='twitter:image'
          content='https://theuranus.github.io/meta-image.jpg'
        />
        {/* Twitter Card */}

        {/* Open Graph*/}
        <meta content='James Nguyen' property='og:title' />
        <meta
          content="James Nguyen's personal website."
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
