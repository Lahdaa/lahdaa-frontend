import React from "react";
import { Wrapper } from "./style";
import { animateFade } from "styles/Base/Animation";

interface PageAnimationProps {
  children?: any;
  key?: string;
}
const PageAnimation: React.FC<PageAnimationProps> = ({ children, key }) => {
  return (
    <Wrapper
      key={key ? key : "_page"}
      variants={animateFade.variants}
      transition={animateFade.transition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Wrapper>
  );
};

export default PageAnimation;
