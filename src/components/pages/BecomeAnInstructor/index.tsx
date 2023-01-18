import React from "react";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import Header from "components/pages/BecomeAnInstructor/Header";
import WhySteviaSection from "./WhySteviaSection";
import NotAloneSection from "./NotAloneSection";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const BecomeAnInstructor = () => (
  <>
    <Head title="Become An Instructor" />
    <PageAnimation key="become-an-instructor-page">
      <Header />
      <WhySteviaSection />
      <NotAloneSection />
      <VacantCourseSection />
    </PageAnimation>
  </>
);

export default BecomeAnInstructor;
