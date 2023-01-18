import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexColumn, FlexRowAiCenter } from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const TopNavStyle = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--color-4);
  border-bottom: 1px solid var(--color-3);
  backdrop-filter: blur(25px);
  padding: 2.5rem 0;
`;

export const TopNavContainer = styled(Center)`
  ${FlexRowAiCenter};
  gap: 7.3rem;

  .links {
    ${FlexRowAiCenter};
    gap: 3.1rem;

    ${responsive(
      "sm",
      `
      display: none;
    `
    )}
  }

  .btns {
    ${FlexRowAiCenter};
    gap: 2rem;

    ${responsive(
      "sm",
      `
      display: none;
    `
    )}
  }

  .mobile-menu {
    ${FlexColumn};
    gap: 0.4rem;
    width: 3rem;
    margin-left: auto;
    display: none;

    span {
      width: 100%;
      height: 0.5rem;
      background-color: var(--color-primary);
    }

    ${responsive(
      "sm",
      `
      display: flex;
    `
    )}
  }
`;
