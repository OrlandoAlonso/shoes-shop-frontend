import '@/styles/globals.css'
import Head from 'next/head';

//import components
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>H STORE | OH Dev</title>
        <meta 
          name='description'
          content='A tu talla' 
        />
        <meta 
          name='viewport'
          content='width=device-width, initial-scale=1' 
        />
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      < Footer />
    </>
  );
};
