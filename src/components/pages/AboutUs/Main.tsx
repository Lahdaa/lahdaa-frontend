import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";

interface Props {}
const Main: React.FC<Props> = () => {
  return (
    <Section className="main">
      <Container>
        <div className="about">
          <Typography
            as="p"
            className="paragraph-12 paragraph--light--mobile text-center max-width-830 mx-auto mb-30"
          >
            Stevia is an instructor led online learning platform that provides
            digital skill training through hands-on projects and collaborative
            learning. At Stevia, we believe that real time human collaboration
            is the best way to learn any practical skill.
          </Typography>
          <div className="about__image-holder responsive-image-container">
            <img src="images/pic-36.webp" alt="" />
          </div>
        </div>

        {/*  */}
        <div className="other-card">
          <div>
            <Typography as="h4" className="heading-12 mb-30">
              Our Courses
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile"
            >
              We are pleased to offer in-depth life-changing affordable courses
              that equips our learners for jobs of the future
            </Typography>
          </div>
          <div className="responsive-image-container">
            <img src="images/pic-37.webp" alt="" />
          </div>
        </div>

        {/*  */}
        <div className="other-card">
          <div className="responsive-image-container">
            <img src="images/pic-38.webp" alt="" />
          </div>
          <div>
            <Typography as="h4" className="heading-12 mb-30">
              Our instructors
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile"
            >
              They are from all over the world. We provide them with the support
              to drive quality instruction to help people develop skills and
              knowledge at any level
            </Typography>
          </div>
        </div>

        {/*  */}
        <div className="other-card">
          <div>
            <Typography as="h4" className="heading-12 mb-30">
              Transforming Lives
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              We are passionate about transforming lives and our primary goal is
              to help improve people’s ability to pursue a career they love .
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              In a rapidly changing world, we believe it’s never too late to
              acquire the necessary skill to excel in this technologically
              diverse age. We respect the power of human connection in the
              learning experience, and we are using technology to enrich the
              educational experience of our students.
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Stevia blends both live and recorded learning and pays less
              emphasis on tests and certificates and more on the learner’s
              ability to perform the skill learned for life.
            </Typography>
            <Typography
              as="p"
              className="paragraph-11 paragraph--light--mobile mb-20"
            >
              Stevia’s focus is to support people's goals to shape their careers
              while sustaining individual liberty and flexibility. Our 100%
              online and instructor driven courses would set the standard for
              universally accessible technical education
            </Typography>
          </div>
          <div className="responsive-image-container">
            <img src="images/pic-39.webp" alt="" />
          </div>
        </div>

        {/*  */}
        <div className="other-card">
          <div className="responsive-image-container">
            <img src="images/pic-40.webp" alt="" />
          </div>
          <div>
            <Typography as="h3" className="heading-12 mb-30 max-width-700">
              If you have questions or require more information reach out to us!
            </Typography>

            <Button className="btn-black btn-md btn-rounded mt-30">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Main;
