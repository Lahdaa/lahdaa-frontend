import React from "react";
import { SectionContainer, Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Flex } from "styles/layouts/Flex";

interface Props {}
const EverybodySection: React.FC<Props> = () => {
  return (
    <Section className="section-everybody">
      <SectionContainer className="mt-120 section-everybody">
        <Container>
          <Flex gap="5rem" className="everybody-layout" flexRowAiCenter>
            <div>
              <Typography as="h4" className="heading-6 mb-20 everybody-text">
                Everybody deserves a great education, not just those who can
                afford it.
              </Typography>
              <Typography
                as="p"
                className="paragraph-6 paragraph--light-500--mobile"
              >
                Stevia is a place to learn in-demand skills, live with experts.
              </Typography>
            </div>
            <div className="responsive-image-container">
              <img src="images/pic-30.webp" alt="" />
            </div>
          </Flex>
        </Container>
      </SectionContainer>
    </Section>
  );
};

export default EverybodySection;
