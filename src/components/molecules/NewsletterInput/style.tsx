import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  background: var(--color-white);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.8rem;
  padding: 0.4rem;
  flex-basis: 43rem;
  ${FlexRowAiCenter}

  ${responsive(
    "sm",
    `
        flex-basis: auto;
    `
  )}

  .input {
    flex-grow: 1;
    border: none;
    padding: 1rem 1rem 1rem 2rem;
    font-family: inherit;

    &:focus,
    &:active {
      border: none;
      outline: none;
    }

    &::placeholder {
      font-family: inherit;
      font-weight: 300;
      font-size: 1.4rem;
      color: var(--color-11);
    }
  }

  .btn-newsletter-input {
    font-weight: 500;
    font-size: 1.4rem;
    height: 100%;
    padding: 0.65rem 4.3rem;

    ${responsive(
      "sm",
      `
        padding: 0.65rem 1rem;
        font-weight: 400;
        font-size: 1.2rem;
    `
    )}
  }
`;
