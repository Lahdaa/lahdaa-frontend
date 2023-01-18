import React from "react";
import Header from "./Header";
import FaqSection from "./FaqSection";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const Faq = () => (
  <>
    <Head title="Frequently Asked questions" />
    <PageAnimation key="faq-page">
      <Header />
      <FaqSection />
    </PageAnimation>
  </>
);

export default Faq;
