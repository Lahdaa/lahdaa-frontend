import React from "react";
import BlueCheck from "components/atoms/svgIcons/BlueCheck";
import Typography from "components/atoms/Typography";
import { CardItem } from "./style";

interface Props {
  title: string;
  subTitle: string;
}
const HeaderCardItem: React.FC<Props> = (props) => {
  const { title, subTitle } = props;
  return (
    <CardItem>
      <BlueCheck />
      <div>
        <Typography as="h5" className="heading-2" text={title} />
        <Typography as="p" className="paragraph-2" text={subTitle} />
      </div>
    </CardItem>
  );
};

export default HeaderCardItem;
