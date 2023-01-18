import React from "react";
import { FooterStyle, FooterContainer, FooterBottom } from "./style";
import LogoWhite from "components/atoms/svgIcons/LogoWhite";
import Typography from "components/atoms/Typography";
import NewsletterInput from "components/molecules/NewsletterInput";
import { Flex } from "styles/layouts/Flex";
import { FooterLink } from "components/atoms/Link";
import moment from "moment";

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <FooterStyle>
      <FooterContainer>
        <Flex flexColumnAiCenter>
          <LogoWhite />
          <Typography
            as="p"
            className="paragraph-7 max-width-480 mt-30 text-center"
          >
            Stevia is a place to learn in-demand skills, live with experts in
            Digital Marketing, Entrepreneurship, UX Design, Animation, Data
            Analytics, and so much more.
          </Typography>
        </Flex>
        <Flex className="input-holder my-50" flexRowJcCenter>
          <NewsletterInput />
        </Flex>

        <FooterBottom className="mx-auto">
          <div className="links-container mt-100">
            <div className="links">
              <FooterLink label="About" path="/about-us" />
              <FooterLink label="Contact us" path="#" />
              <FooterLink label="FAQ" path="/faq" />
            </div>
            <div className="links">
              <FooterLink
                label="Become an Instructor"
                path="/become-an-instructor"
              />
              {/* <FooterLink label="Careers (COMING SOON)" /> */}
              <FooterLink label="Terms and Policy" />
            </div>
            <div className="links">
              <FooterLink
                label="Instagram"
                passHref={true}
                path={"https://www.instagram.com/trysteviapro/"}
                target="_blank"
              />
              <FooterLink
                label="Facebook"
                passHref={true}
                path={"https://www.facebook.com/Stevia-106056768135994"}
                target="_blank"
              />
              <FooterLink
                label="Twitter"
                passHref={true}
                path={"https://twitter.com/steviapro"}
                target="_blank"
              />
              <FooterLink
                label="LinkedIn"
                passHref={true}
                path={"https://www.linkedin.com/company/steviapro/"}
                target="_blank"
              />
            </div>
          </div>
          <Typography as="p" className="paragraph-7 mt-100">
            © {moment().year()} Copyright Stevia. All rights reserved.
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </FooterStyle>
  );
};

export default Footer;
