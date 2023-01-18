import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { Center } from "styles/layouts/Center";

export const HeaderContainer = styled.header`
  padding: 10rem 0;

  ${responsive(
    "sm",
    `
  padding: 6rem 0;
  `
  )}
`;

export const Section = styled.section`
  &.all-courses {
    padding: 0rem 0 10rem;
  }
`;

export const Container = styled(Center)``;
