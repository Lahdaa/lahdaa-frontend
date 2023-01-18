import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import {
  FlexColumn,
  FlexColumnJcBetween,
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcCenter,
} from "styles/Abstract/Mixins";
import { Center, CenterExtended } from "styles/layouts/Center";

export const Section = styled.section`
  /* Everybody loves stevia section */
  &.section-everybody {
    background-color: var(--color-white);
  }
  &.section-vacant-course {
    background-color: var(--color-2);
    padding: 7rem 0;
  }
`;

export const SectionContainer = styled(CenterExtended)`
  /* Everybody loves stevia section */
  &.section-everybody {
    background-image: url("images/svg-1.svg");
    background-position: top left;
    background-repeat: no-repeat;
    padding: 10rem 0 1rem;
  }
`;

export const Container = styled(Center)`
  .white-card {
    background: var(--color-white);
    box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    padding: 5rem;

    ${responsive(
      "sm",
      `
      flex-direction: column;
      gap: 4rem;
    `
    )}
    ${responsive(
      "xsm",
      `
      padding: 3rem;
    `
    )}
  }

  .white-card__left {
    flex-basis: 50rem;
    ${responsive(
      "sm",
      `
     flex-basis: auto;
    `
    )}
  }

  .white-card__right {
    flex-grow: 1;
    ${FlexColumn};

    img {
      ${responsive(
        "sm",
        `
       width: 100%;
    `
      )}
    }
  }

  .cards-container {
    ${responsive(
      "lg",
      `
    flex-direction: column;
    `
    )}
  }

  .blue-card,
  .black-card {
    flex-basis: 50%;
    border-radius: 2rem;
    box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.05);
    padding: 4rem;
    /* flex-shrink: 0; */
    /* flex-grow: 1; */
    ${FlexColumn}

    ${responsive(
      "lg",
      `
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    `
    )}
    ${responsive(
      "xmd",
      `
    flex-direction: column;
    gap: 1rem;
    `
    )}
  }

  .blue-card {
    background: var(--color-8);

    &-image__holder {
      img {
        width: 100%;
      }
    }
  }

  .black-card {
    background: var(--color-9);
  }

  /* Categories */
  .category-card {
    ${FlexRowAiCenter};
    gap: 3rem;
    background: var(--color-white);
    box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    padding: 4rem;
    margin-bottom: 3rem;

    ${responsive(
      "sm",
      `
        flex-direction: column;
      `
    )}
  }

  .category-card__image {
  }
  .category-card__description {
  }

  /* Video Section */
  .video-white-bg {
    background: var(--color-white);
    border-radius: 2.8rem;
    padding: 4rem;
    ${FlexRow};
    gap: 3rem;

    ${responsive(
      "sm",
      `
        flex-direction: column;
         border-radius: 1.8rem;
    padding: 1.5rem;
        
      `
    )}

    .chat-pics {
      ${responsive(
        "sm",
        `
        display: none;
        
      `
      )}
    }
  }

  .video-attendants {
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    border-radius: 16.729px;
    height: 66rem;
    ${responsive(
      "sm",
      `
       height: 30rem;
      `
    )}

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .caller {
      position: absolute;
      top: 3rem;
      left: 3rem;
      ${responsive(
        "sm",
        `
       top: 1rem;
      left: 0;
      width: 3.9rem;
      height: 1.3rem;
      `
      )}
    }
    .call-controls {
      position: absolute;
      bottom: 3rem;
      ${FlexRowJcCenter};
      width: 100%;

      ${responsive(
        "sm",
        `
       bottom: 1rem;
      `
      )}

      img {
        ${responsive(
          "sm",
          `
       width:15.1rem;
      `
        )}
      }
    }

    .callers {
      position: absolute;
      top: 3rem;
      right: 3rem;
      bottom: 3rem;
      ${FlexColumnJcBetween};
      gap: 1.4rem;

      ${responsive(
        "sm",
        `
       gap: .4rem;
       justify-content: flex-start;
       top: 1rem;
      right: 1rem;
    `
      )}

      .last-caller {
        ${responsive(
          "sm",
          `
        width: 3.72rem;
        height: 3.72rem;
    `
        )}
      }
    }
  }

  .video-attendants__imgs {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: 90%;
    height: 90%;
  }

  /*  */
  .video-checked-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    ${responsive(
      "lg",
      `
     grid-gap: 1.5rem;
    `
    )}
    ${responsive(
      "md",
      `
    grid-template-columns: repeat(2, 1fr);
    `
    )}
    ${responsive(
      "sm",
      `
       grid-template-columns: repeat(1, 1fr);
      `
    )}
  }

  /* Everybody */
  .everybody-layout {
    ${responsive(
      "sm",
      `
       flex-direction: column;
      `
    )}
  }
  .everybody-text {
    position: relative;

    &::after {
      position: absolute;
      top: -3rem;
      right: -2rem;
      content: url("images/svg-2.svg");

      ${responsive(
        "sm",
        `
       top: -6rem;
    `
      )}
    }
  }
`;

export const CallerVideoWrapper = styled.div`
  ${FlexColumnJcCenterAiCenter}

  .callers-name {
    ${responsive(
      "sm",
      `
       font-size: .6rem;
       margin-top: 0;
    `
    )}
  }
`;

export const CallerVideoStyle = styled.div`
  border: 0.201037rem solid var(--color-white);
  border-radius: 1.34025rem;
  width: 8.72rem;
  height: 8.72rem;

  ${responsive(
    "sm",
    `
        width: 3.72rem;
        height: 3.72rem;
    `
  )}

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.34025rem;
  }
`;
