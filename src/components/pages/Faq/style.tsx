import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { Center } from "styles/layouts/Center";

export const HeaderContainer = styled.header`
  padding: 10rem 0;

  ${responsive("sm", `padding: 5rem 0 5rem;`)}
`;

export const Section = styled.section`
  &.faqs {
    padding: 0 0 10rem;
  }
`;

export const Container = styled(Center)``;

export const FaqItem = styled.div`
  background-color: var(--color-white);
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
