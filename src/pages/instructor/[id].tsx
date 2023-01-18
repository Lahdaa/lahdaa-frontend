import React from "react";
import Instructor from "components/pages/Instructor";
import { getAnInstructor } from "services/instructorService";

const IndexPage = ({ res }) => {

  // Data to render
  return (
    <>
      <Instructor instructor={res} />
    </>
  );
};

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resp = await getAnInstructor(params.id);
  const data = { ...resp.data.instructor_info };

  return {
    props: {
      res: data,
    },
  };
}

export default IndexPage;
