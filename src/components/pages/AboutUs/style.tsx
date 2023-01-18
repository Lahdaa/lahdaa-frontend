import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import {
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenter,
} from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const HeaderContainer = styled.header`
  padding: 10rem 0 10rem;

  ${responsive("sm", `padding: 5rem 0 5rem;`)}
`;

export const Section = styled.section`
  &.main {
    padding: 5rem 0 15rem;
  }
`;

export const Container = styled(Center)`
  & > * {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  .about {
    background: linear-gradient(
      104.27deg,
      #3d9dff 1.16%,
      #805cf4 73.97%,
      #805cf4 100.3%
    );
    border-radius: 2rem;
    padding: 4rem;
  }

  .about__image-holder {
    ${FlexRowJcCenter};
  }

  .other-card {
    background: var(--color-white);
    border-radius: 2rem;
    padding: 4rem;
    ${FlexRowJcBetweenAiCenter};
    gap: 3rem;

    ${responsive("sm", `flex-direction: column`)}
  }
`;
