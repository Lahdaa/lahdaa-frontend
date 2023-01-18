import { css } from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";

export const Typography = css`
  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .heading {
    &-1 {
      font-weight: 700;
      font-size: clamp(2.2rem, 3.5vw, 6rem);
      line-height: clamp(4.1rem, 4vw, 7.8rem);
      color: var(--color-2);
    }

    &-2 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.7rem;
      color: var(--color-2);
    }

    &-3 {
      font-weight: 700;
      font-size: clamp(2rem, 3vw, 2.5rem);
      line-height: clamp(2.5rem, 3vw, 2.8rem);
      color: var(--color-7);
    }

    &-4 {
      font-weight: 700;
      font-size: clamp(2.3rem, 3vw, 4rem);
      line-height: clamp(3.3rem, 4vw, 5.3rem);
      color: var(--color-2);
    }

    &-5 {
      font-weight: 600;
      font-size: clamp(2rem, 2vw, 3rem);
      line-height: clamp(2.8rem, 3vw, 4rem);
      color: var(--color-2);
    }

    &-6 {
      font-weight: 700;
      font-size: clamp(3rem, 3vw, 5rem);
      line-height: clamp(4.7rem, 4vw, 6.7rem);
      color: var(--color-2);
    }

    &-7 {
      font-weight: 700;
      font-size: 2.2rem;
      line-height: 2.9rem;
      color: var(--color-2);
    }

    &-8 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
      color: var(--color-12);
    }

    &-9 {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: var(--color-black);
    }

    &-10 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: var(--color-black);
    }

    &-11 {
      font-weight: 700;
      font-size: clamp(2.8rem, 3.5vw, 6.6rem);
      line-height: clamp(4.6rem, 4.5vw, 8.4rem);
      color: var(--color-2);
    }

    &-12 {
      font-weight: 700;
      font-size: clamp(1.8rem, 4vw, 3rem);
      line-height: clamp(2.8rem, 4vw, 4rem);
      color: var(--color-2);
    }

    &-13 {
      font-weight: 700;
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: clamp(3rem, 4vw, 4rem);
      color: var(--color-5);
    }

    &-14 {
      font-weight: 600;
      font-size: clamp(1.2rem, 4vw, 1.8rem);
      line-height: clamp(2.2rem, 4vw, 2.8rem);
      color: var(--color-2);
    }

    &-15 {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 3.3rem;
      color: var(--color-2);
    }

    &-16 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.8rem;
      color: var(--color-7);
    }

    &-17 {
      font-weight: 600;
      font-size: 3rem;
      line-height: 140%;
      color: var(--color-2);
    }

    &-18 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.5rem;
      color: var(--color-14);
    }

    &-19 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: var(--color-14);
    }

    &-20 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.7rem;
      color: var(--color-7);
    }

    &-21 {
      font-weight: 700;
      font-size: clamp(2.2rem, 3vw, 5.5rem);
      line-height: clamp(4rem, 4vw, 7.3rem);
      /* font-size: 5.5rem;
      line-height: 7.3rem; */
      color: var(--color-2);
    }

    &-22 {
      font-weight: 400;
      font-size: 4.5rem;
      line-height: 6rem;
      color: var(--color-2);
    }

    &-23 {
      font-weight: 600;
      font-size: clamp(3rem, 4vw, 4rem);
      line-height: clamp(4.3rem, 4vw, 5.3rem);
      color: var(--color-8);
    }

    &-24 {
      font-weight: 600;
      font-size: clamp(1.6rem, 4vw, 2rem);
      line-height: clamp(2.4rem, 4vw, 2.8rem);
      color: var(--color-2);
    }

    &-25 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
      color: var(--color-2);
    }

    &-26 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2.8rem;
      color: var(--color-7);
    }

    &-27 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      color: var(--color-10);
    }

    &-28 {
      font-weight: 600;
      font-size: 2.1rem;
      line-height: 2.8rem;
      color: var(--color-2);
    }
  }

  /* Paragraphs */
  .paragraph {
    &-1 {
      font-weight: 600;
      font-size: clamp(2rem, 3vw, 2.5rem);
      line-height: clamp(3.8rem, 3vw, 4.2rem);
      color: var(--color-2);
    }

    &-2 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2rem;
      color: var(--color-6);
    }

    &-3 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 3rem;
      color: var(--color-6);
    }

    &-4 {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 3rem;
      color: var(--color-white);
    }

    &-5 {
      font-weight: 400;
      font-size: clamp(1.8rem, 2vw, 2rem);
      line-height: clamp(2.2rem, 3vw, 2.7rem);
      color: var(--color-6);
    }

    &-6 {
      font-weight: 500;
      font-size: 3rem;
      line-height: 4rem;
      color: var(--color-7);
    }

    &-7 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.8rem;
      color: var(--color-white);
    }

    &-8 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.9rem;
      color: var(--color-2);
    }

    &-9 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: var(--color-12);
    }

    &-10 {
      font-weight: 600;
      font-size: clamp(1.4rem, 4.5vw, 1.8rem);
      line-height: clamp(2.7rem, 4.5vw, 2.8rem);
      color: var(--color-2);
    }

    &-11 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.8rem;
      color: var(--color-7);
    }

    &-12 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.8rem;
      color: var(--color-5);
    }

    &-13 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 160%;
      color: var(--color-13);
    }

    &-14 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.8rem;
      color: var(--color-7);
    }

    &-15 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 3rem;
      color: var(--color-6);
    }

    &-16 {
      font-weight: 400;
      font-size: clamp(1.2rem, 4vw, 1.8rem);
      line-height: clamp(2.3rem, 4vw, 2.8rem);
      color: var(--color-2);
    }

    &-17 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.8rem;
      color: var(--color-2);
    }

    &-18 {
      font-weight: 400;
      font-size: clamp(1.4rem, 4vw, 1.8rem);
      line-height: clamp(2.2rem, 4vw, 2.8rem);
      color: var(--color-2);
    }

    &-19 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.8rem;
      color: var(--color-2);
    }

    &-20 {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: var(-color-13);
    }

    &-21 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 160%;
      color: var(-color-16);
    }

    &-22 {
      font-weight: 300;
      font-size: 1.6083rem;
      line-height: 2.1rem;
      color: var(-color-white);
    }

    &-23 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.8rem;
      color: var(-color-2);
    }

    &-24 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-transform: uppercase;
      color: var(-color-14);
    }

    &--light {
      &--mobile {
        ${responsive(
          "sm",
          `
              font-weight: 400;
            `
        )}
      }
    }
    &--light-500 {
      &--mobile {
        ${responsive(
          "sm",
          `
              font-weight: 500;
            `
        )}
      }
    }
  }
`;
