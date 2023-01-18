import React from "react";
import { default as NextLink } from "next/link";
import { Props } from "./types";
import { FooterLinkStyle } from "./style";

const FooterLink: React.FC<Props> = (props) => {
  // Props
  const { label, path, passHref } = props;
  return (
    <NextLink href={path ? path : "#"} passHref={passHref || false}>
      <FooterLinkStyle {...props}>{label}</FooterLinkStyle>
    </NextLink>
  );
};

export default FooterLink;
