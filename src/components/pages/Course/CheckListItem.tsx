import React from "react";
import BlueCheck from "components/atoms/svgIcons/BlueCheck";
import Typography from "components/atoms/Typography";
import { Flex } from "styles/layouts/Flex";

interface Props {
  heading?: string;
  paragraph?: string;
}
const CheckListItem: React.FC<Props> = (props) => {
  const { paragraph: subTitle, heading: title } = props;
  return (
    <>
      {!subTitle && !title ? null : (
        <Flex gap="1rem" className="xxsm-flex-column" flexRow>
          <BlueCheck className="flex-shrink-0 icon" />
          <div>
            {title && (
              <Typography as="h5" className="heading-24" text={title} />
            )}
            {subTitle && (
              <Typography
                as="p"
                className={`paragraph-16 ${!title ? "mt-3" : ""}`}
                text={subTitle}
              />
            )}
          </div>
        </Flex>
      )}
    </>
  );
};

export default CheckListItem;
