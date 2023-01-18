import React from "react";
import { HeaderContainer, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import Link from "next/link";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer className="">
      <Container className="header">
        <Typography as="h2" className="heading-11 text-center mb-20">
          Become an instructor
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-580 mx-auto"
        >
          Help us build the future of technical education in underserved
          communities and emerging markets
        </Typography>

        <Link href="/apply">
          <a className="text-decoration-none">
            <Button className="btn-black btn-md btn-rounded display-block mx-auto mt-70">
              Apply Now
            </Button>
          </a>
        </Link>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
