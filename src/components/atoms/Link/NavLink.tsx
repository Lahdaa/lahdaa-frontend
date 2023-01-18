import React from "react";
import { default as NextLink } from "next/link";
import { Props } from "./types";
import { LinkStyle } from "./style";

const NavLink: React.FC<Props> = (props) => {
  // Props
  const { label, path, position } = props;
  return (
    <NextLink href={`${path ? path : "#"}`}>
      <LinkStyle
        {...props}
        className={position ? `text-${position}` : "text-center"}
      >
        {label}
      </LinkStyle>
    </NextLink>
  );
};

export default NavLink;
