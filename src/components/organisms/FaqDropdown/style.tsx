import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";
import { Button } from "styles/Components/Button";

export const Wrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 1rem;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
export const Top = styled(Button)`
  width: 100%;
  background: var(--color-white);
  box-shadow: 0 0 1rem -2rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2.5rem;
  border: none;
  ${FlexRowAiCenter};
  gap: 2.4rem;

  &:active,
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export const Bottom = styled.div`
  padding: 2.5rem;
`;
