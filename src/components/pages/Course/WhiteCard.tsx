import React from "react";
import Typography from "components/atoms/Typography";
import { WhiteCardWrapper } from "./style";

interface Props {
  title?: string;
  className?: string;
  children?: any;
}
const WhiteCard: React.FC<Props> = ({ title, children, ...props }) => (
  <WhiteCardWrapper {...props}>
    <Typography as="h4" className="heading-12 mb-20">
      {title || "--"}
    </Typography>
    {children}
  </WhiteCardWrapper>
);

export default WhiteCard;
