import React, { useState } from "react";
import Typography from "components/atoms/Typography";
import { Wrapper, Top, Bottom } from "./style";

interface Props {
  className?: string;
  title?: string;
  content?: string;
}
const Faq: React.FC<Props> = (props) => {
  // State
  const [showDropdown, setShowDropdown] = useState(false);

  // Props
  const { title, content } = props;

  // Data to render
  return (
    <Wrapper {...props}>
      <Top onClick={() => setShowDropdown(!showDropdown)}>
        <Typography as="h6" className="heading-14">
          {title}
        </Typography>
        <div className="ml-auto">
          <img src="/images/arrow-down-black.svg" alt="" />
        </div>
      </Top>
      {showDropdown && (
        <Bottom>
          <Typography as="p" className="paragraph-20">
            {content}
          </Typography>
        </Bottom>
      )}
    </Wrapper>
  );
};

export default Faq;
