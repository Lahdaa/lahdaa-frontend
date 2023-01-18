import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Flex } from "styles/layouts/Flex";
import { Button } from "components/atoms/Button";
import Link from "next/link";


interface Props {}
const BenefitSection: React.FC<Props> = () => {
  return (
    <Section>
      <Container>
        <Typography
          as="h5"
          text="Benefits"
          className="heading-3 text-center mb-40 mt-50"
        />
        <Flex gap="5rem" className="white-card mb-30" flexRowAiCenter>
          <div className="white-card__left">
            <Typography
              as="h5"
              text="Learn and Apply Real World Projects"
              className="heading-4 mb-50"
            />
            <Typography
              as="p"
              className="paragraph-3 paragraph--light--mobile mb-10"
            >
              A learning platform that focuses on doing. After all, people learn
              the best by doing.
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              Work on practical projects to help you apply what you have learnt.
              Get feedback from instructors and gain hands on experience.
            </Typography>

            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
          <div className="responsive-image-container">
            {/* <img src="images/pic-45.svg" alt="" className="flex-start" />
            <img src="images/pic-46.svg" alt="" className="flex-center" /> */}
            <img
              src="/images/pic-49.webp"
              alt="header img"
              className="flex-end"
            />
          </div>
        </Flex>

        <Flex gap="3rem" className="cards-container" flexRow>
          <div className="blue-card">
            <div>
              <Typography as="h5" className="heading-4 mb-20 color-white">
                Live classes and collaborative learning
              </Typography>
              <Typography
                as="p"
                className="paragraph-4 paragraph--light--mobile mb-10"
              >
                Our fully online live classes will give you real interaction
                with your instructors and peers. Join classes from anywhere and
                participate in lecture content, facilitated conversations,
                interactive workshop and so much more.
              </Typography>
            </div>
            <Flex gap="2.2rem" className="mt-50" flexRowAiCenter>
              <div className="blue-card-image__holder">
                <img src="images/pic-48.svg" alt="" />
              </div>
            </Flex>
          </div>
          <div className="black-card">
            <div>
              <Typography
                as="h5"
                className="heading-4 mb-50 mb-50--sm-20 color-white"
              >
                Learning experience
              </Typography>
              <Typography
                as="p"
                className="paragraph-4 paragraph--light--mobile mb-60"
              >
                A dashboard to track your progress and manage your learning
                experience and communicate with your instructor making sure you
                never feel alone
              </Typography>
            </div>
            <div className="blue-card-image__holder">
              <img src="images/pic-12.webp" alt="" />
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default BenefitSection;
