import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import {
  FlexRowAiCenter,
  FlexRowJcCenterAiCenter,
} from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const HeaderContainer = styled.header`
  padding: 12rem 0 10rem;

  ${responsive(
    "sm",
    `padding: 7rem 0 6rem;
`
  )}
`;

export const Section = styled.section`
  &.why-stevia {
    padding: 10rem 0 14rem;
  }
  &.not-alone {
    padding: 8rem 0 14rem;
  }
`;

export const Container = styled(Center)`
  /* Header  */
  &.header {
    background-image: url("images/pic-33.webp");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    background-size: 100%;
    padding-bottom: 40rem;

    ${responsive(
      "sm",
      `padding-bottom: 20rem;
`
    )}
  }

  .why-stevia-white-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    .card {
      background-color: #ffffff;
      border-radius: 2rem;
      padding: 3rem;
    }

    ${responsive(
      "sm",
      `grid-template-columns: repeat(1, 1fr);
`
    )}
  }

  .teach-anywhere {
    ${FlexRowAiCenter};
    background: linear-gradient(
      104.27deg,
      #6f5ae5 1.16%,
      #e29fca 63.31%,
      #e26b91 100.3%
    );
    border-radius: 2rem;
    padding: 3rem;
    gap: 4rem;

    ${responsive(
      "sm",
      `flex-direction: column;
      text-align: center;
`
    )}
  }

  .not-alone {
    ${FlexRowJcCenterAiCenter};
    gap: 3rem;

    ${responsive(
      "sm",
      `flex-direction: column-reverse;
      text-align: center;
`
    )}
  }
`;
