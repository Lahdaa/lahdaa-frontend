import React from "react";
import { Wrapper } from "./style";
import InstructorCard from "components/molecules/InstructorCard";
import { useInstructor } from "store/instructors";
import EmptyData from "components/atoms/EmptyData";
import Loader from "./Loader";

interface Props {}
const InstructorCards: React.FC<Props> = () => {
  // Effect
  const { instructors, isLoadingInstructors } = useInstructor();

  //  Data to render
  return (
    <>
      {isLoadingInstructors ? (
        <Loader />
      ) : (
        <>
          {!instructors.length ? (
            <EmptyData />
          ) : (
            <Wrapper>
              <>
                {instructors?.map((instructor: any) => (
                  <InstructorCard key={instructor.id} instructor={instructor} />
                ))}
              </>
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};

export default InstructorCards;
