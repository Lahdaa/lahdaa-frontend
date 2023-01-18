import React from "react";
import Typography from "../Typography";
import { Wrapper } from "./style";

interface EmptyDataProps {
  text?: string;
}
const EmptyData: React.FC<EmptyDataProps> = ({ text }) => {
  return (
    <Wrapper>
      <img src="/images/no-data.svg" alt="" />
      <Typography as="h5" className="heading-14" text={text ? text : "No data found"} />
    </Wrapper>
  );
};

export default EmptyData;
