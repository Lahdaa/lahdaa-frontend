import React from "react";
import CoursesSection from "components/organisms/CourseSection";
import VacantCourseSection from "components/organisms/VacantCourseSection";
import Card from "./Card";
import Head from "components/atoms/meta/head";
import PageAnimation from "components/templates/PageAnimation";

interface Props {
  instructor?: any;
}
const Instructor: React.FC<Props> = ({ instructor }) => {
  // Data to render
  return (
    <>
      <Head title="Instructor" />
      <PageAnimation key="instructor-page">
        <Card data={instructor} />
        <CoursesSection title={`Courses by ${instructor?.instructor_name}`} />
        <VacantCourseSection />
      </PageAnimation>
    </>
  );
};

export default Instructor;
