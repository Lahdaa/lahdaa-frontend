import React, { useEffect } from "react";
import { HeaderContainer, Container } from "./style";
import Typography from "components/atoms/Typography";
import SearchWithDropdown from "components/organisms/SearchWithDropdown";
import { useHelper } from "store/helper";

interface Props {}
const Header: React.FC<Props> = () => {
  // Store
  const { courseCategoriesMapped, getCoursesCategory } = useHelper();
  
  // Effect
  useEffect(() => {
    if (!courseCategoriesMapped.length) getCoursesCategory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HeaderContainer>
      <Container className="header">
        <Typography
          as="h2"
          className="heading-11 text-center mb-40 max-width-690 mx-auto"
        >
          Meet our instructors
        </Typography>
        <Typography
          as="p"
          className="paragraph-10 text-center max-width-590 mx-auto"
        >
          Browse our growing list of expert instructors. Learn from some of the
          best professionals from across the world.
        </Typography>

        <SearchWithDropdown
          options={courseCategoriesMapped}
          className="mt-90"
        />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
