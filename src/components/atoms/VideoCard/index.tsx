import React from "react";
import ReactPlayer from "react-player/lazy";
import { Container } from "./style";

interface Props {
  url?: string;
  className?: string;
}

const VideoCard: React.FC<Props> = (props) => {
  const { className, url } = props;

  return (
    <Container className={`${className ? className : ""}`}>
      <ReactPlayer
        url={url ? url : "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
        width='100%'
        height='472px'
      />
    </Container>
  );
};

export default React.memo(VideoCard);
