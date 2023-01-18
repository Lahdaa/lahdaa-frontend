import React, { useState } from "react";
import Typography from "components/atoms/Typography";
import { Wrapper, Top, Bottom } from "./style";

interface Props {
  className?: string;
  curriculum?: any;
}
const CurriculumDropdown: React.FC<Props> = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Props
  const { curriculum } = props;
  return (
    <Wrapper {...props}>
      <Top onClick={() => setShowDropdown(!showDropdown)}>
        <div>
          <img src="/images/arrow-down.svg" alt="" />
        </div>
        <Typography as="h6" className="heading-14 text-left">
          {curriculum?.topic}
        </Typography>
        <Typography as="p" className="paragraph-18 ml-auto">
          Week {curriculum?.week_number}
        </Typography>
      </Top>
      {showDropdown && (
        <Bottom>
          <Typography as="p" className="paragraph-19">
            {curriculum?.description}
          </Typography>
        </Bottom>
      )}
    </Wrapper>
  );
};

export default CurriculumDropdown;
