import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { Button } from "styles/Components/Button";

export const ButtonStyle = styled(Button)<{ className?: any; props?: any }>`
  /* Disabled button */
  &:disabled {
    cursor: not-allowed;
  }

  &.btn {
    /* btn color */
    &-primary {
      background-color: var(--color-10);
      color: var(--color-white);
    }

    &-white {
      background-color: var(--color-white);
      color: var(--color-2);
    }

    &-black {
      color: var(--color-white);
      background-color: var(--color-2);
    }

    /* btn sizes */
    &-md {
      padding: 1rem 2.5rem;
    }

    &-full {
      padding: 1rem 2.5rem;
      width: 100%;
    }

    /* btn shapes */
    &-rounded {
      border-radius: 0.7rem;
    }

    &-round-6 {
      border-radius: 0.6rem;
    }

    /* btn others */
    &-nav-btn {
      font-weight: 600;
      font-size: 1.5rem;
    }
    &-header-btn {
      font-weight: 600;
      font-size: 1.8rem;
    }
    &-course-card {
      font-weight: 600;
      font-size: 1.5rem;
    }
    &-search {
      padding: 1.7rem 0.3rem;
      /* padding: 5.3rem 0.5rem; */
      width: 16rem;

      &:disabled {
        opacity: 0.8;
      }

      ${responsive(
        "sm",
        `
   padding: .7rem .3rem;

  `
      )}
    }
  }
`;
