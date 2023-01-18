import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import {
  FlexColumnJcCenterAiCenter,
  FlexRowAiCenter,
} from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexColumnJcCenterAiCenter};
  gap: 6rem;
`;

export const FilterHolder = styled.div`
  ${FlexRowAiCenter};
  background: var(--color-white);
  box-shadow: 0 1rem 2.8rem -0.3rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.8rem 2.5rem;

  ${responsive(
    "sm",
    `
    flex-direction: column;
    gap: 3rem;
  `
  )}

  .filter-title {
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--color-2);
    padding-right: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--color-22);
      width: 1px;
      height: 100%;

      ${responsive(
        "sm",
        `
    display: none
  `
      )}
    }
  }

  .filters {
    ${FlexRowAiCenter};
    gap: 7rem;
    padding-left: 2rem;

    ${responsive(
      "sm",
      `
    flex-direction: column;
    gap: 3rem;
  `
    )}
  }
`;
