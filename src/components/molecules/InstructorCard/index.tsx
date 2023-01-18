import React from "react";
import { Wrapper } from "./style";
import Typography from "components/atoms/Typography";
import Link from "next/link";

interface Props {
  instructor?: any;
}
const InstructorCard: React.FC<Props> = ({ instructor }) => {
  // Data to render
  return (
    <Wrapper>
      <div className="instructor-img">
        {instructor?.profile_picture_url ? (
          <img
            src={
              instructor?.profile_picture_url
                ? `${instructor.profile_picture_url}`
                : "images/img-placeholder.webp"
            }
            alt=""
            className="image"
          />
        ) : (
          <img src={"/images/no-image.webp"} alt="" className="image" />
        )}
      </div>
      <Link href={instructor?.id ? `/instructor/${instructor?.id}` : "#"}>
        <a className="instructor-link">
          <div className="instructor-details">
            <Typography as="h5" className="heading-15 mb-10 cursor-pointer">
              {instructor?.name ? instructor?.name : "--"}
            </Typography>

            <Typography as="h6" className="heading-16">
              {instructor?.professional_title
                ? instructor?.professional_title
                : "--"}
            </Typography>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default InstructorCard;
