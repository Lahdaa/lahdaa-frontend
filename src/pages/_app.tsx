import React from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/GlobalStyles";
import Head from "components/atoms/meta/head";
import TopNav from "components/organisms/TopNav";
import Footer from "components/organisms/Footer";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head title="Home" />
      <GlobalStyle />
      <TopNav />
      <AnimatePresence initial={false} exitBeforeEnter>   
          <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
};
export default App;
