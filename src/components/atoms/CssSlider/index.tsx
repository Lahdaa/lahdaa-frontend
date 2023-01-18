import React from "react";
import { Wrapper, ContentContainer } from "./style";

interface Props {
  children: JSX.Element;
}
const CssSlider: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
};

export default CssSlider;
