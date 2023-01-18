import React from "react";
import Course from "components/pages/Course";
import { getACourse } from "services/coursesService";

const IndexPage = ({ res }) => {
  return (
    <>
      <Course data={res} />
    </>
  );
};

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resp = await getACourse(params.id);
  const data = { ...resp.data.course, ...resp.data };

  return {
    props: {
      res: data,
    },
  };
}

export default IndexPage;
