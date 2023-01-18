import React from "react";
import Typography from "components/atoms/Typography";
import { Center } from "styles/layouts/Center";
import { DetailsWrapper, CourseInfo, InstructorDetails, Card } from "./style";
import { Button } from "components/atoms/Button";
import { Flex } from "styles/layouts/Flex";
import WhiteCard from "./WhiteCard";
import CheckListItem from "./CheckListItem";
import Slider from "./Slider";
import CurriculumDropdown from "components/organisms/CurriculumDropdown";
import FaqDropdown from "components/organisms/FaqDropdown";
import VideoCard from "components/atoms/VideoCard";
import moment from "moment";
import { faqContent } from "./Dummy";

const Details = ({ data }) => {
  return (
    <section>
      <Center>
        {false ? (
          <Typography
            as="h5"
            className="heading-5 text-center"
            text="Loading...."
          />
        ) : (
          <>
            <header className="mt-50">
              <Center>
                <Typography as="h6" className="heading-20">
                  {data?.course_category_name}
                </Typography>
                <Typography as="h6" className="heading-21 max-width-1000">
                  {data?.course_name}
                </Typography>
                <Typography
                  as="p"
                  dangerouslySetInnerHTML={{
                    __html: `${data?.sub_title}`,
                  }}
                  className="paragraph-16 max-width-830 text-truncate show-only-first mt-20"
                >
                </Typography>
              </Center>
            </header>

            <DetailsWrapper>
              <>
                <div className="left mt-50">
                  {/* Instructor Details */}
                  <InstructorDetails>
                    <div className="avatar">
                      <img
                        src={
                          data?.instructor_details?.profile_picture_url ||
                          "/images/img-placeholder.webp"
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <Typography
                        as="h6"
                        className="heading-25"
                        text={data?.instructor_details?.name}
                      />
                      <Typography
                        as="h6"
                        className="heading-26"
                        text={data?.instructor_details?.professional_title}
                      />
                      <img src="/images/stars.svg" alt="" />
                    </div>
                  </InstructorDetails>

                  {/* Course Enroll details mobile view */}
                  <div className="display-on-mobile mt-40">
                    <CourseInfo type="mobile-view">
                      <Typography
                        as="h3"
                        className="heading-23"
                        text={`£ ${data?.price || "0.00"}`}
                      />
                      <Button className="btn-black btn-md btn-rounded btn-nav-btn btn-full mt-18">
                        Enrole Now
                      </Button>
                      <Typography
                        as="h6"
                        className="heading-24 mt-50"
                        text="Course Information"
                      />
                      <Flex className="mt-22 mb-10" gap="2rem" flexRowAiCenter>
                        <img
                          src="/images/calendar-icon.svg"
                          className="flex-shrink-0"
                          alt=""
                        />
                        <Typography as="p" className="paragraph-23">
                          Start date:{" "}
                          {moment(data.start_date).format("MMM Do YY") || "--"}
                        </Typography>
                      </Flex>
                      <Flex className="mb-10" gap="2rem" flexRowAiCenter>
                        <img
                          src="/images/calendar-icon.svg"
                          className="flex-shrink-0"
                          alt=""
                        />
                        <Typography as="p" className="paragraph-23">
                          End date:{" "}
                          {moment(data.end_date).format("MMM Do YY") || "--"}
                        </Typography>
                      </Flex>
                      <Flex className="mb-10" gap="2rem" flexRowAiCenter>
                        <img
                          src="/images/clock-icon.svg"
                          className="flex-shrink-0"
                          alt=""
                        />
                        <Typography as="p" className="paragraph-23">
                          Duration: {`${data?.course_duration} Week(s)`}
                        </Typography>
                      </Flex>
                      <Flex className="" gap="2rem" flexRowAiCenter>
                        <img
                          src="/images/status-up-icon.svg"
                          className="flex-shrink-0"
                          alt=""
                        />
                        <Typography as="p" className="paragraph-23">
                          Competency level:{" "}
                          {`${
                            data?.level_of_competence_name
                              ? data?.level_of_competence_name
                              : "--"
                          }`}
                        </Typography>
                      </Flex>
                    </CourseInfo>
                  </div>

                  {/* Video */}
                  {data?.promo_video_url ? (
                    <VideoCard className="mt-40" url={data?.promo_video_url} />
                  ) : null}

                  {/*  */}
                  {data?.about_course && (
                    <WhiteCard title="About the course" className="mt-60">
                     
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.about_course,
                        }}
                        className="paragraph-16 mb-15"
                      ></div>
                    </WhiteCard>
                  )}

                  {/* What you will learn  */}
                  <WhiteCard
                    title="What you will learn"
                    className="mt-60 list-container"
                  >
                    {JSON.parse(data?.outcomes).map((outcome, index) => (
                      <CheckListItem key={index} paragraph={outcome} />
                    ))}

                 </WhiteCard>

                  {/* Curriculum  */}
                  {data?.curriculums.length ? (
                    <>
                      <Typography as="h4" className="heading-12 mb-20 mt-60">
                        Curriculum
                      </Typography>
                      {data?.curriculums.map((curriculum: any) => (
                        <CurriculumDropdown
                          key={curriculum?.curriculum_id}
                          curriculum={curriculum}
                          className=""
                        />
                      ))}
                    </>
                  ) : (
                    ""
                  )}

                  {/* Who is course for  */}
                  {data?.who_is_this_course_for &&
                    data?.who_is_this_course_for.length && (
                      <WhiteCard
                        title="Who is this course for?"
                        className="mt-60 list-container"
                      >
                        {data?.who_is_this_course_for.map((course: any) => (
                          <Card key={course.id}>
                            <CheckListItem
                              heading={course?.category_name || "--"}
                              paragraph={course?.description}
                            />
                          </Card>
                        ))}
                      </WhiteCard>
                    )}

                  {/* Student Review  */}
                  <WhiteCard
                    title="Student review"
                    className="mt-60 list-container"
                  >
                    {data?.course_reviews.length ? (
                      <Slider />
                    ) : (
                      "No reviews yet"
                    )}
                  </WhiteCard>

                  {/* What you need  */}
                  <WhiteCard
                    title="What you need to take this course "
                    className="mt-60 list-container"
                  >
                    {JSON.parse(data?.course_requirements).map(
                      (course_requirement, index) => (
                        <CheckListItem
                          key={index}
                          paragraph={course_requirement}
                        />
                      )
                    )}
                   
                  </WhiteCard>

                  {/* Faq */}
                  <Typography as="h4" className="heading-12 mb-20 mt-60">
                    FAQ
                  </Typography>
                  {faqContent.map((faq) => (
                    <FaqDropdown title={faq.title} content={faq.content} />
                  ))}

                  {/* Benefits  */}
                  <WhiteCard title="Benefits of this course" className="mt-60">
                    <Typography as="h5" className="heading-27">
                      Live classes
                    </Typography>
                    <Typography as="p" className="paragraph-13 mt-10 mb-35">
                      This course is active and interactive, you will engage
                      with the instructor and your cohort. Live classes will
                      take place once a week over Zoom.
                    </Typography>
                    <Typography as="h5" className="heading-27">
                      Office hours
                    </Typography>
                    <Typography as="p" className="paragraph-13 mt-10 mb-35">
                      During the course, you will have the opportunity to ask
                      questions and have your questions answered by the
                      instructor in dedicated sessions for Q & A.
                    </Typography>
                    <Typography as="h5" className="heading-27">
                      Group learning
                    </Typography>
                    <Typography as="p" className="paragraph-13 mt-10 mb-35">
                      This course is designed to enable peer learning and
                      collaboration through live class breakout sessions, a
                      Slack community, and group projects.
                    </Typography>
                    <Typography as="h5" className="heading-27">
                      Project based learning
                    </Typography>
                    <Typography as="p" className="paragraph-13 mt-10">
                      You will learn by applying them. Working on weekly
                      micro-projects and assignments that would help you become
                      an effective go-to-market strategist.
                    </Typography>
                  </WhiteCard>
                </div>

                {/* Right Side */}
                <div className="right hide-on-mobile">
                  <CourseInfo type="mobile-view">
                    <Typography
                      as="h3"
                      className="heading-23"
                      text={`£ ${data?.price || "0.00"}`}
                    />
                    <Button className="btn-black btn-md btn-rounded btn-nav-btn btn-full mt-18">
                      Enrole Now
                    </Button>
                    <Typography
                      as="h6"
                      className="heading-24 mt-50"
                      text="Course Information"
                    />
                    <Flex className="mt-22 mb-10" gap="2rem" flexRowAiCenter>
                      <img
                        src="/images/calendar-icon.svg"
                        className="flex-shrink-0"
                        alt=""
                      />
                      <Typography as="p" className="paragraph-23">
                        Start date:{" "}
                        {moment(data.start_date).format("MMM Do YY") || "--"}
                      </Typography>
                    </Flex>
                    <Flex className="mb-10" gap="2rem" flexRowAiCenter>
                      <img
                        src="/images/calendar-icon.svg"
                        className="flex-shrink-0"
                        alt=""
                      />
                      <Typography as="p" className="paragraph-23">
                        End date:{" "}
                        {moment(data.end_date).format("MMM Do YY") || "--"}
                      </Typography>
                    </Flex>
                    <Flex className="mb-10" gap="2rem" flexRowAiCenter>
                      <img
                        src="/images/clock-icon.svg"
                        className="flex-shrink-0"
                        alt=""
                      />
                      <Typography as="p" className="paragraph-23">
                        Duration: {`${data?.course_duration} Week(s)`}
                      </Typography>
                    </Flex>
                    <Flex className="" gap="2rem" flexRowAiCenter>
                      <img
                        src="/images/status-up-icon.svg"
                        className="flex-shrink-0"
                        alt=""
                      />
                      <Typography as="p" className="paragraph-23">
                        Competency level:{" "}
                        {`${
                          data?.level_of_competence_name
                            ? data?.level_of_competence_name
                            : "--"
                        }`}
                      </Typography>
                    </Flex>
                  
                  </CourseInfo>
                </div>
              </>
            </DetailsWrapper>
          </>
        )}
      </Center>
    </section>
  );
};

export default Details;
