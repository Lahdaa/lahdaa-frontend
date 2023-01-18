import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRow, FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  border-radius: 2rem;
  overflow: hiddden;
  ${FlexRow};
  margin-top: 1.8rem;
  padding-bottom: 9rem;

  ${responsive("sm", `flex-direction: column`)}

  .image-holder {
    flex-basis: 37rem;
    flex-shrink: 0;
    border-radius: 2rem 0 0 2rem;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 2rem 0 0 2rem;
      ${responsive(
        "sm",
        `
    border-radius: 2rem 2rem 0 0;
    `
      )}
    }

    ${responsive(
      "sm",
      `flex-basis: auto;
    flex-shrink: auto;
    border-radius: 2rem 2rem 0 0;
    `
    )}
  }

  .details {
    padding: 4rem;
    background-color: var(--color-white);
    border-radius: 0 2rem 2rem 0;
    flex-grow: 1;

    ${responsive("sm", `padding: 2rem; border-radius: 0 0 2rem 2rem;`)}
  }
`;

export const TitleAndStar = styled.div`
  ${FlexRowAiCenter};
  gap: 2.5rem;
`;

export const SocialIconsWrapper = styled.div`
  /* background-color: rgba(243, 244, 245, 0.7);
  border: 1.02134px solid var(--color-15);
  box-shadow: 0 1.5rem 3rem -3px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  border-radius: 1rem;
  padding: 1.2rem;
  width: max-content; */
`;

export const SocialIcons = styled.div`
  background-color: var(--color-white);
  backdrop-filter: blur(3px);
  border-radius: 0.6rem;
  /* padding: 1.7rem; */

  ${FlexRowAiCenter};
  gap: 2.5rem;

  .social-links {
    transition: 0.4s;
    ${FlexRowAiCenter};
    gap: 1rem;
    text-decoration: none;
    padding: 1rem;

    &:hover {
      box-shadow: 0 3.89px 7.78px rgba(0, 0, 0, 0.1);
    }

    &__text {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-transform: uppercase;
      color: var(--color-24);
    }
  }
`;
