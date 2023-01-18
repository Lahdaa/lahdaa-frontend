import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import Courses from "components/organisms/Courses";

interface Props {}
const CoursesSection: React.FC<Props> = () => {
  return (
    <Section className="mt-120">
      <Container>
        <Typography
          as="h5"
          text="Explore Courses"
          className="heading-3 text-center mb-40 mt-100"
        />

        <Courses isSlider />
        <Button className="btn-black btn-md btn-rounded display-block mx-auto mt-70">
          Explore courses
        </Button>
      </Container>
    </Section>
  );
};

export default CoursesSection;
