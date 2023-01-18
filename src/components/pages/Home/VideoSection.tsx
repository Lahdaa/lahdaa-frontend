import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import CheckCard from "components/molecules/CheckCard";
import CallerVideo from "./CallerVideo";

const data = [
  {
    title: "For everyone",
    subTitle: "it’s never too late to learn",
  },
  {
    title: "Admission Criteria ",
    subTitle: "Self-motivation, a computer & internet",
  },
  {
    title: "Application focused",
    subTitle: "build your portfolio ",
  },
];

interface Props {}
const VideoSection: React.FC<Props> = () => {
  return (
    <Section className="mt-120">
      <Container>
        <Typography as="h4" className="heading-4 mb-30">
          Work with instructors in real time
        </Typography>
        <div className="video-white-bg">
          <div className="video-attendants">
            <video loop muted autoPlay>
              <source src="videos/vid-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img
              src="images/pic-29.webp"
              alt=""
              className="video-attendants__imgs"
            /> */}
            <img src="images/pic-52.svg" alt="" className="caller" />
            <div className="call-controls responsive-image-container">
              <img src="images/pic-50.svg" alt="" />
            </div>
            <div className="callers">
              <CallerVideo name="You" videoName="vid-2.mp4" />
              <CallerVideo name="Temitope N." videoName="vid-3.mp4" />
              <CallerVideo name="Jane S" videoName="vid-6.mp4" />
              <CallerVideo name="Jonh D" videoName="vid-5.mp4" />
              <img src="images/pic-51.svg" alt="" className="last-caller" />
            </div>
          </div>
          <div className="responsive-image-container chat-pics">
            <img src="images/pic-23.webp" alt="" />
          </div>
        </div>

        <div className="video-checked-cards my-80">
          {data.map((dat,idx) => (
            <CheckCard key={idx} title={dat.title} subTitle={dat.subTitle} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default VideoSection;
