import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.1rem;
  /* justify-content: center; */

  ${responsive(
    "sm",
    `
    grid-template-columns: repeat(2, 1fr);
  `
  )}
  ${responsive(
    "xsm",
    `
    grid-template-columns: repeat(1, 1fr);
  `
  )}
`;

export const LoaderCard = styled.div`
  --color: #f5f5f5;
  /* height: 47.9rem; */
  /* padding: 0.5rem; */
  padding-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  flex-basis: 29rem;
  flex-shrink: 0;
  background-color: var(--color-white);
  border: 1px solid var(--color);

  .body {
    padding: 20px;
    padding-bottom: 0;
  }
`;
