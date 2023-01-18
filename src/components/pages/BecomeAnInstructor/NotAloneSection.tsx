import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import Link from "next/link";

interface Props {}
const NotAloneSection: React.FC<Props> = () => {
  return (
    <Section className="not-alone">
      <Container>
        <div className="not-alone">
          <div className="responsive-image-container">
            <img src="images/pic-35.webp" alt="" />
          </div>
          <div>
            <Typography as="h4" className="heading-3 mb-30">
              You are not alone
            </Typography>
            <Typography as="h2" className="heading-6 max-width-510">
              We provide our instructors with the support to drive quality
              instruction to help people develop their skills
            </Typography>

            <Link href="/apply">
              <a className="text-decoration-none">
                <Button className="btn-black btn-md btn-rounded mt-70">
                  Apply Now
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NotAloneSection;
