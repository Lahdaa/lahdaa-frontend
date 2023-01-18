import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";

interface Props {}
const WhySteviaSection: React.FC<Props> = () => {
  return (
    <Section className="why-stevia">
      <Container>
        <Typography as="h4" className="heading-3 mb-30">
          Why Stevia
        </Typography>
        <Typography as="h3" className="heading-12 mb-70 max-width-720">
          At stevia, you are much more than an instructor you are a partner
        </Typography>

        <div className="why-stevia-white-cards">
          <div className="card">
            <Typography as="h6" className="heading-12 mb-40">
              Pay it foward
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Help people learn new skills, advance their careers, and explore
              their hobbies by sharing your knowledge.
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Give people with limited opportunity the best lessons from your
              experience
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Change lives and make a difference
            </Typography>
          </div>
          <div className="card">
            <Typography as="h6" className="heading-12 mb-40">
              Earn extra income
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              As a Stevia instructor you set your course fee
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Earn additional income, track your earnings on your dashboard
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Get paid anywhere in the world
            </Typography>
          </div>
        </div>

        <div className="teach-anywhere mt-30">
          <div>
            <Typography as="h4" className="heading-13 mb-40">
              Teach from anywhere
            </Typography>
            <Typography as="p" className="paragraph-12 mb-20">
              Teach 100% online from anywhere in the world
            </Typography>
            <Typography as="p" className="paragraph-12 mb-20">
              Plan, Start and stop courses around your schedule
            </Typography>
            <Typography as="p" className="paragraph-12 mb-20">
              Choose how and when you are available
            </Typography>
          </div>
          <div className="responsive-image-container">
            <img src="images/pic-34.webp" alt="" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhySteviaSection;
