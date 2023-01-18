import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div<{ DropdownButton?: any }>`
  ${FlexRowAiCenter};

  ${responsive(
    "sm",
    `
    flex-direction: column;
  `
  )}

  .input-and-dropdown {
    ${FlexRowAiCenter};
    background-color: var(--color-white);
    padding-left: ${({ DropdownButton }) => (DropdownButton ? "2.6rem" : "0")};
    border-radius: 1rem 0 0 1rem;
    box-shadow: 0 1rem 2.8rem -0.3rem rgba(0, 0, 0, 0.05);

    ${responsive(
      "sm",
      `
    margin-bottom: 1rem;
    border-radius: 1rem;
    /* overflow: hidden; */

  `
    )}
  }
  .input {
    background-color: var(--color-white);
    opacity: 0.7;
    /* box-shadow: 0 1rem 2.8rem -0.3rem rgba(0, 0, 0, 0.05); */
    font-family: inherit;
    font-style: italic;
    border: none;
    outline: none;
    padding: 1.2rem 2.6rem;
    flex-basis: 30rem;
    flex-shrink: 1;

    border-radius: ${({ DropdownButton }) =>
      DropdownButton ? "none" : "1rem 0 0 1rem"};

    ${responsive(
      "sm",
      `
   flex-basis: auto;
  `
    )}

    &:active,
    &:focus {
      outline: none;
      border: none;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 1.3rem;
      font-style: italic;
      color: var(--color-21);
    }
  }
`;
