import React from "react";
import { HeaderContainer, Container } from "./style";
import Typography from "components/atoms/Typography";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <Container className="header">
        <Typography
          as="h2"
          className="heading-11 text-center mb-40 mx-auto"
        >
          Instructors Application
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-830 mx-auto"
        >
          We know that some people would prefer to have a hands-on approach to
          learning, Stevia provides learners with a personalized experience.
        </Typography>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
