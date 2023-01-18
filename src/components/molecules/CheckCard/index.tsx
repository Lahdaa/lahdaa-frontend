import React from "react";
import { Wrapper } from "./style";
import Typography from "components/atoms/Typography";
import BlueCheck from "components/atoms/svgIcons/BlueCheck";

interface Props {
  title: string;
  subTitle: string;
}
const CheckCard: React.FC<Props> = (props) => {
  const { title, subTitle } = props;
  return (
    <Wrapper>
      <BlueCheck className="icon" width="50" height="50" />
      <div>
        <Typography as="h5" className="heading-5 mb-10" text={title} />
        <Typography as="p" className="paragraph-5" text={subTitle} />
      </div>
    </Wrapper>
  );
};

export default CheckCard;
