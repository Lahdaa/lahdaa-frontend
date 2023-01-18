import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRow } from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const HeaderContainer = styled.header`
  padding: 10rem 0;
`;

export const Section = styled(Center)`
  padding-bottom: 12rem;
`;

export const Container = styled(Center)``;

export const FormCardLayout = styled.div`
  background-color: var(--color-white);
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 4rem;
  ${FlexRow};
  gap: 2rem;

  ${responsive("xsm", `padding: 2.5rem;`)}

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .form-labels {
    flex-grow: 1;
  }

  .form-inputs {
    flex-basis: 70rem;
    ${responsive("sm", `flex-basis: auto;`)}
  }

  ${responsive("sm", `flex-direction: column; flex-basis: auto;`)}
`;
