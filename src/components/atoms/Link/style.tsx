import styled from "styled-components";
import { Link } from "styles/Components/Link";

export const LinkStyle = styled(Link)`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: var(--color-1);
  transition: 0.4s;

  &:hover {
    color: var(--color-primary);
  }
`;

export const FooterLinkStyle = styled(Link)`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 300%;
  line-height: 1.8rem;
  text-decoration: none;
  color: var(--color-white);
  transition: 0.4s;

  &:hover {
    color: var(--color-primary);
  }
`;
