import styled, { css } from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexColumn, FlexRowAiCenter } from "styles/Abstract/Mixins";
import { Button } from "styles/Components/Button";

export const Wrapper = styled.div`
  position: relative;
  ${FlexColumn}
`;

export const DropdownBtn1 = css`
  gap: 1.1rem;
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--color-2);
`;
export const DropdownBtn2 = css`
  gap: 0.9rem;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--color-2);
`;
export const DropdownBtn = styled(Button)<{
  textType?: any;
  hasBorder?: any;
  title?: any;
}>`
  position: relative;
  ${FlexRowAiCenter};
  ${({ textType }) =>
    textType === "bold" ? `${DropdownBtn1}` : `${DropdownBtn2}`}
  ${({ hasBorder }) =>
    hasBorder
      ? ` padding-right: 2.6rem;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--color-22);
    width: 1px;
    height: 100%;
  }`
      : ``}
`;

export const DropdownList = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  /* width: max-content; */
  width: 20rem;
  ${FlexColumn};
  gap: 1.5rem;
  background-color: var(--color-white);
  /* opacity: 0.7; */
  box-shadow: 0 1rem 2.8rem -0.3rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  z-index: 2;

  position: absolute;
  top: 150%;
  left: -4rem;

  ${responsive(
    "sm",
    `
    /* left: -5rem; */
  `
  )}

  .dropdown-item {
    padding-inline: 2rem;
    transition: 0.4s;
    text-align: left;

    &:hover {
      color: var(--color-primary);
      font-weight: bold;
      /* width: 100%; */
    }
  }
`;
