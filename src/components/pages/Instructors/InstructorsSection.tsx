import React from "react";
import { Section, Container } from "./style";
import { Button } from "components/atoms/Button";
import InstructorCards from "components/organisms/InstructorCards";

interface Props {}
const InstructorsSection: React.FC<Props> = () => {
  return (
    <Section className="all-instructors">
      <Container>
        <InstructorCards />
        <Button className="btn-black btn-md btn-rounded display-block mx-auto mt-70">
          Apply Now
        </Button>
      </Container>
    </Section>
  );
};

export default InstructorsSection;
