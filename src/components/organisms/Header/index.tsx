import React from "react";
import { Button } from "components/atoms/Button";
import {
  HeaderStyle,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWideContainer,
} from "./style";
import Typography from "components/atoms/Typography";
import Link from "next/link";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <HeaderStyle>
      <HeaderWideContainer>
        <HeaderContainer>
          <HeaderLeft>
            <Typography as="h3" className="heading-1 hero-heading mb-20 mt-90">
              A dead end career is not a dead end.
            </Typography>
            <Typography as="p" className="paragraph-1 hero-sub-heading mb-50">
              Learn the skills to change your career, get a new job, become a
              content creator or build your own business.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-header-btn">
                  Explore courses
                </Button>
              </a>
            </Link>
          </HeaderLeft>
          <HeaderRight>
            <img src="images/header-img.webp" alt="header-img" />
          </HeaderRight>
        </HeaderContainer>
      </HeaderWideContainer>
    </HeaderStyle>
  );
};

export default Header;
