import React, { useEffect, useState } from "react";
import CourseCard from "components/molecules/CourseCard";
import CssSlider from "components/atoms/CssSlider";
import { useCourse } from "store/courses";
import { getCourses } from "services/coursesService";
import { Wrapper } from "./style";
import EmptyData from "components/atoms/EmptyData";
import Loader from "./Loader";

interface Props {
  isSlider?: boolean;
}
const Courses: React.FC<Props> = ({ isSlider }) => {
  // State
  const [isLoading, setIsLoading] = useState(false);

  // Store
  const { getCourses, courses, isLoadingCourses } = useCourse();

  // Handler
  const getAllCourses = async () => {
    setIsLoading(true);
    await getCourses();
    setIsLoading(false);
  };

  // Effects
  useEffect(() => {
    getAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to render
  return (
    <>
      {isLoading || isLoadingCourses ? (
        <Loader />
      ) : (
        <>
          {isSlider ? (
            <CssSlider>
              <>
                {courses.map((course: any) => (
                  <CourseCard key={course.id} data={course} />
                ))}
              </>
            </CssSlider>
          ) : (
            <>
              {!courses.length ? (
                <EmptyData />
              ) : (
                <Wrapper>
                  {courses.map((course: any) => (
                    <CourseCard key={course.id} data={course} />
                  ))}
                </Wrapper>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Courses;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // const { getCourses } = useCourse();
  const res = await getCourses();
  return {
    props: { res },
  };
}
