import styled from "styled-components";
import {
  FlexRowWrapJcBetween,
  FlexRowJcCenter,
  FlexColumn,
} from "styles/Abstract/Mixins";
import { Center } from "styles/layouts/Center";

export const FooterStyle = styled.footer`
  background-color: var(--color-2);
  padding: 7rem 0;
`;

export const FooterContainer = styled(Center)`
  .input-holder {
    ${FlexRowJcCenter}
  }
`;

export const FooterBottom = styled(Center)`
  max-width: 70rem;

  .links-container {
    ${FlexRowWrapJcBetween};
    gap: 3rem;
  }

  .links {
    ${FlexColumn};
    gap: 4rem;
  }
`;
