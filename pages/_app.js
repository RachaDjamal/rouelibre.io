import App from "next/app";
import Head from "next/head";
import "../styles/global.scss";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import * as ga from '../lib/ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const router = useRouter()
  UIkit.use(Icons);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
 
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.data.attributes.favicon)} />

        
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};


// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global", {
    populate: {
      favicon:'*',
      defaultSeo: {
        populate: '*',
      },
    },
  });
  
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;