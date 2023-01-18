import React from "react";
import { Section, Container } from "../../pages/Courses/style";
import { Button } from "components/atoms/Button";
import Courses from "components/organisms/Courses";
import Typography from "components/atoms/Typography";

interface Props {
  title?: string;
}
const CoursesSection: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <Section className="all-courses">
      <Container>
        {title && (
          <Typography as="h4" className="heading-3 mb-30">
            {title}
          </Typography>
        )}
        <Courses isSlider={false} />
        <Button className="btn-black btn-md btn-rounded display-block mx-auto mt-70">
          Apply Now
        </Button>
      </Container>
    </Section>
  );
};

export default CoursesSection;
