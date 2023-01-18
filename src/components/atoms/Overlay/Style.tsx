import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const OverlayStyle = styled(motion.div)<{ position: string }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  overflow-y: auto;
  padding-bottom: 5rem;

  ${({ position }) =>
    position === "center"
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ""}

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @supports (backdrop-filter: blur(0.5rem)) {
    backdrop-filter: blur(0.5rem);
  }
`;
