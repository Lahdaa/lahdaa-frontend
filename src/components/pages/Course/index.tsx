import React from "react";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import Details from "./Details";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const Course = ({ data }) => (
  <>
    <Head title="Course" />
    <PageAnimation key="course-page">
      <Details data={data} />
      <div className="mt-100"></div>
      <VacantCourseSection />
    </PageAnimation>
  </>
);

export default Course;
