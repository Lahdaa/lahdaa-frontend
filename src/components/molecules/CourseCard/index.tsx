import React from "react";
import { Wrapper, Instructor } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import Link from "next/link";

interface Props {
  data?: any;
}
const CourseCard: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <div className="top">
        <img
          src={data?.thumbnail_file_url || "/assets/images/no-image.webp"}
          alt=""
          className="image"
        />
        <Typography
          as="span"
          className="price"
          text={`£${data?.price ? data?.price : 0.0}`}
        />
      </div>
      <div className="bottom">
        <div>
          <Typography
            as="h5"
            className="heading-8 mb-10"
            text={data?.course_category_name}
          />
          <Typography as="h5" className="heading-9">
            {data?.course_name}
          </Typography>

          <Instructor className="mb-20">
            <div className="image">
              <img
                src={
                  data?.profile_picture_url || "/images/img-placeholder.webp"
                }
                alt=""
              />
            </div>
            <div>
              <Typography
                as="h6"
                className="heading-10 mb-5"
                text={data?.instructor_name}
              />
              <Typography as="p" className="paragraph-9">
                {data?.professional_title || "--"}
              </Typography>
            </div>
          </Instructor>
        </div>

        <div>
          <Link href={`/course/${data?.id}`}>
            <a className="text-decoration-none">
              <Button className="btn-black btn-full btn-rounded course-card">
                View Course
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CourseCard;
