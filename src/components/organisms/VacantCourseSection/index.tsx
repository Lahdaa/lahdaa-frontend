import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import VacantCourses from "components/organisms/VacantCourses";

interface Props {}
const VacantCourseSection: React.FC<Props> = () => {
  return (
    <Section className="section-vacant-course">
      <Container>
        <Typography as="h5" className="heading-3 text-center mb-60">
          We are looking for Instructors for these courses
        </Typography>

        <VacantCourses />
      </Container>
    </Section>
  );
};

export default VacantCourseSection;
