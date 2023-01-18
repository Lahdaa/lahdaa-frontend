import React from "react";
import { Wrapper } from "./style";
import Typography from "components/atoms/Typography";
import CircleArrow from "components/atoms/svgIcons/CircleArrow";
import Link from "next/link";

interface Props {
  title: string;
  subTitle: string;
}
const VacantCourseCard: React.FC<Props> = (props) => {
  const { title, subTitle } = props;
  return (
    <Wrapper>
      <div>
        <Typography as="h4" className="heading-7 mb-20" text={title} />
        <Typography as="p" className="paragraph-8" text={subTitle} />
      </div>

      <Link href="/apply">
        <a className="flex-align-end">
          <CircleArrow
            className="icon"
            path1ClassName="icon-bg"
            path2ClassName="icon-arrow"
          />
        </a>
      </Link>
    </Wrapper>
  );
};

export default VacantCourseCard;
