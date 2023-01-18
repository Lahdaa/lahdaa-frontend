import React from "react";
import Typography from "components/atoms/Typography";
import { SliderContainer } from "./style";

interface Props {}
const Slider: React.FC<Props> = () => (
  <SliderContainer className="mt-40">
    <div className="top">
      <img src="/images/left-arrow.svg" />
      <div className="content">
        <Typography as="p" className="paragraph-18">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </Typography>
        <div className="user mt-30">
          <div className="user__pic-holder">
            <img src="/images/header-img.webp" alt="" className="user__image" />
          </div>
          <div>
            <Typography as="h6" className="heading-28">
              Ayobam Emmanuel
            </Typography>
            <Typography as="p" className="paragraph-18">
              Product designer
            </Typography>
          </div>
        </div>
      </div>
      <img src="/images/right-arrow.svg" />
    </div>
    <div className="actions ">
      <span className="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </SliderContainer>
);

export default Slider;
