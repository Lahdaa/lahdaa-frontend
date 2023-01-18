import styled from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";
import { FlexRowJcBetween } from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const CardSection = styled.section`
  ${responsive(
    "sm",
    `
   padding-top: 5rem; 
   padding-bottom: 5rem; 
  `
  )}
`;

export const CardContainer = styled(Center)`
  ${FlexRowJcBetween};
  background-color: var(--color-white);
  padding: 4rem 4.5rem;
  box-shadow: 0 4.5rem 3.8rem -2rem rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  transform: translateY(-50%);

  ${responsive(
    "xmd",
    `
     flex-wrap: wrap;
     justify-content: center;
     gap: 5rem;
    `
  )}
  ${responsive(
    "sm",
    `
   transform: translateY(0); 
  `
  )}
`;
