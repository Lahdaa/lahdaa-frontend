import React from "react";
import Header from "./Header";
import Form from "./Form";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const Apply = () => (
  <>
    <Head title="Application" />
    <PageAnimation key="application-page">
      <Header />
      <Form />
    </PageAnimation>
  </>
);

export default Apply;
