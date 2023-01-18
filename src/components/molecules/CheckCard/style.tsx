import styled from "styled-components";
import { FlexRow } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexRow};
  gap: 1.5rem;
  background: var(--color-white);
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 3rem;

  .icon {
    flex-shrink: 0;
  }
`;
