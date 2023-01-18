import React from "react";
import Header from "./Header";
import CoursesSection from "components/organisms/CourseSection";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

const Courses = () => (
  <>
    <Head title="Courses" />
    <PageAnimation key="courses-page">
      <Header />
      <CoursesSection />
      <VacantCourseSection />
    </PageAnimation>
  </>
);

export default Courses;
