import Typography from "components/atoms/Typography";
import React from "react";
import { CallerVideoStyle, CallerVideoWrapper } from "./style";

interface CallerVideoProps {
  name?: string;
  videoName?: string;
}
const CallerVideo: React.FC<CallerVideoProps> = ({ name, videoName }) => {
  return (
    <CallerVideoWrapper>
      <CallerVideoStyle>
        <video loop muted autoPlay>
          <source src={`/videos/${videoName}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CallerVideoStyle>
      <Typography
        as="p"
        className="paragraph-22 text-center mt-3 color-white callers-name"
        text={name}
      />
    </CallerVideoWrapper>
  );
};

export default CallerVideo;
