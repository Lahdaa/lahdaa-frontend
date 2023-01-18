import React from "react";
import Typography from "components/atoms/Typography";
import { Center } from "styles/layouts/Center";
import {
  Wrapper,
  TitleAndStar,
  SocialIcons,
  SocialIconsWrapper,
} from "./style";
import Link from "next/link";
import LinkedIn from "components/atoms/svgIcons/LinkedIn";

interface Props {
  data?: any;
}
const Card: React.FC<Props> = ({ data }) => {
  return (
    <header>
      <Center>
        <Wrapper>
          <div className="image-holder responsive-image-container">
            {data?.linkedin_profile_url ? (
              <img src={`${data?.profile_picture_url}`} alt="" />
            ) : (
              <img src={`/images/no-image.webp`} alt="" />
            )}
          </div>
          <div className="details">
            <Typography as="h4" className="heading-17 mb-10">
              {data?.instructor_name}
            </Typography>
            <TitleAndStar className="mb-10">
              <Typography as="h6" className="heading-18 text-italic">
                {data?.professional_title}
              </Typography>
              <img src="/images/stars.svg" alt="" />
            </TitleAndStar>

            {data?.state_name && (
              <Typography as="h6" className="paragraph-24">
                {data?.state_name}
              </Typography>
            )}

            <Typography
              as="p"
              className="paragraph-3 paragraph--light--mobile mt-30"
            >
              {data?.about_you}
            </Typography>

            <SocialIconsWrapper className="mt-20">
              <SocialIcons>
                <Link href={data?.linkedin_profile_url || '#'} passHref={true}>
                  <a target={"_blank"} className="social-links">
                    <LinkedIn />

                    <Typography
                      as="span"
                      className="social-links__text"
                      text="Linkedin"
                    />
                  </a>
                </Link>
              </SocialIcons>
            </SocialIconsWrapper>
          </div>
        </Wrapper>
      </Center>
    </header>
  );
};

export default Card;
