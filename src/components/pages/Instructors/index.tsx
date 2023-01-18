import React from "react";
import Header from "./Header";
import InstructorsSection from "./InstructorsSection";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const Instructors = () => (
  <>
    <Head title="Instructors" />
    <PageAnimation key="instructors-page">
      <Header />
      <InstructorsSection />
      <VacantCourseSection />
    </PageAnimation>
  </>
);

export default Instructors;
