import styled from "styled-components";
import { motion } from "framer-motion";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexColumn, FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 30rem;
  background-color: var(--color-white);
  background-color: rgba(255,255,255,0.75);
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  overflow-y: auto;
  ${responsive(
    "xxsm",
    `
      width: 100%;
    `
  )}

  .top {
    ${FlexRowJcBetweenAiCenter};
    gap: 1rem;
    margin-bottom: 5rem;
  }

  .mobile-menu {
    ${FlexColumn};
    gap: 0.4rem;
    width: 3rem;
    margin-left: auto;

    span {
      width: 100%;
      height: 0.5rem;
      background-color: var(--color-primary);
    }
    span.first {
      transform: translate(0, 5px) rotate(-45deg);
    }
    span.second {
      transform: translate(0, -4px) rotate(45deg);
    }
  }

  .links {
    ${FlexColumn};
    gap: 1.5rem;
  }
`;
