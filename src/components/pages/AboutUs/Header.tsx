import React from "react";
import { HeaderContainer, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer className="">
      <Container className="header">
        <Typography as="h2" className="heading-11 text-center mb-20">
          Our mission
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-580 mx-auto"
        >
          To empower people in underserved communities and emerging markets to
          reach and pursue their dreams
        </Typography>

        <Button className="btn-black btn-md btn-rounded display-block mx-auto mt-70">
          Apply Now
        </Button>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
