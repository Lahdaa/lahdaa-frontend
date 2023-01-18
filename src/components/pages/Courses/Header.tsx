import React from "react";
import { HeaderContainer, Container } from "./style";
import Typography from "components/atoms/Typography";
import FilterAndSearch from "components/molecules/FilterAndSearch";

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <Container className="header">
        <Typography
          as="h2"
          className="heading-11 text-center mb-20 max-width-1150 mx-auto"
        >
          Find courses to fuel and transform your career or business
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-550 mx-auto"
        >
          Whether you are a beginner or just want to upskill we have courses for
          you.
        </Typography>

        <FilterAndSearch className="mt-90" />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
