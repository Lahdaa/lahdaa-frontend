import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import {
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "styles/Abstract/Mixins";

export const Wrapper = styled.section``;

export const DetailsWrapper = styled.div`
  ${FlexRow};
  gap: 3.7rem;

  & > * {
  }

  ${responsive(
    "xmd",
    `
  flex-direction: column-reverse;
  flex-direction: column;
  `
  )}

  .left {
    flex-grow: 1;
  }
  .right {
    flex-basis: 41.1rem;
    flex-shrink: 0;
  }
`;

export const CourseInfo = styled.div<{ type?: any }>`
  ${({ type }) =>
    type === "mobile-view"
      ? ``
      : `
    
  position: sticky;
  top: 12rem;
  
  `}
  background: var(--color-white);
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 3.4rem 3rem;

  ${responsive(
    "xmd",
    `
  max-width: 41.1rem;
  `
  )}
`;

export const InstructorDetails = styled.div`
  ${FlexRow};
  gap: 1.1rem;

  .avatar {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    border: 1px solid var(--color-10);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const WhiteCardWrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 4rem;
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 4rem;

  &.list-container {
    & > div {
      margin-bottom: 2rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${responsive("xsm", `padding: 2rem`)}
`;

export const Card = styled.div`
  background: var(--color-white);
  border: 1.13994px solid rgba(232, 232, 232, 0.4);
  box-shadow: 0 1.13rem 2.84rem rgba(0, 0, 0, 0.07);
  border-radius: 1.13rem;
  padding: 2rem;
  margin-bottom: 2.4rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SliderContainer = styled.div`
  ${FlexColumnJcCenterAiCenter};
  gap: 5rem;

  .top {
    ${FlexRowJcBetweenAiCenter};
    gap: 4rem;
  }

  .content {
    flex-grow: 1;
  }

  .user {
    ${FlexRow};
    gap: 1.1rem;
  }

  .user__pic-holder {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .user__image {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .actions {
    ${FlexRowAiCenter};
    gap: 0.8rem;

    span {
      display: inline-block;
      width: 00.5rem;
      height: 00.5rem;
      border-radius: 50%;
      background-color: #647382;
      transition: 00.4s;

      &.active {
        background-color: #200e32;
        border-radius: 4rem;
        width: 3.1rem;
      }
    }
  }
`;
