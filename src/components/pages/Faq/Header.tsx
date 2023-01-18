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
          className="heading-11 text-center mb-40 max-width-720 mx-auto"
        >
          Frequently asked questions
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-830 mx-auto"
        >
          if you have additional questions and enquires. Please reach out -
          contact us
        </Typography>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
