import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRow } from "styles/Abstract/Mixins";
import { CenterExtended, Center } from "styles/layouts/Center";

export const HeaderStyle = styled.header``;

export const HeaderContainer = styled(Center)`
  ${FlexRow};
  gap: 5rem;

  ${responsive(
    "sm",
    `
    flex-direction: column;
    gap: 6rem;

  `
  )}
`;

export const HeaderWideContainer = styled(CenterExtended)`
  background-image: url("images/header-img.webp");
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 72.2rem 67.8rem;
  padding-bottom: 22rem;
  /* background-color: green; */

  ${responsive(
    "lg",
    `
    background-image: none;
    padding-bottom: 0;
    padding: 0;

  `
  )}
`;

export const HeaderLeft = styled.div`
  flex-basis: 58rem;

  ${responsive(
    "sm",
    `
   flex-basis: 30rem;

  `
  )}

  .hero-heading {
    ${responsive(
      "sm",
      `
   
   margin-top: 5rem;

  `
    )}
  }

  .hero-sub-heading {
    ${responsive(
      "sm",
      `
   max-width: 70rem;
   margin-inline: auto;

  `
    )}
  }
`;

export const HeaderRight = styled.div`
  flex-basis: 72.2rem;
  height: 67.8rem;
  margin-left: auto;
  display: none;
  border-radius: 2rem 0 0 2rem;

  ${responsive(
    "lg",
    `
    display: block;
  `
  )}
  ${responsive(
    "sm",
    `
    margin-right: 0;
    margin-left: 0;
    border-radius: 2rem;
    height: auto;
     flex-basis: 0;
  `
  )}

  img {
    width: 100%;
    height: 51.8rem;
    /* background-size: 72.2rem 67.8rem; */
    object-fit: cover;
    border-radius: 2rem 0 0 2rem;

    ${responsive(
      "sm",
      `
    border-radius: 2rem;
      height: 31.8rem;

  `
    )}
    ${responsive(
      "xsm",
      `
    height: 25.8rem;

  `
    )}
    ${responsive(
      "xxsm",
      `
    height: auto;

  `
    )}
  }
`;
