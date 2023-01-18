import React from "react";
import VacantCourseCard from "components/molecules/VacantCourseCard";
import CssSlider from "components/atoms/CssSlider";

const data = [
  {
    id: 1,
    title: "Software Development",
    subTitle:
      "build creative skills in photography, animation, video editing, graphic design, illustration and so much more. Build and enhance skills in user experience research, mobile, web design, and working within product teams",
  },
  {
    id: 2,
    title: "Data Science",
    subTitle:
      "master data analytics, visualization, SQL, structure, and algorithms. Learn tools or enhance your knowledge of tools like tableau, excel and R",
  },
  {
    id: 3,
    title: "Creative & Design",
    subTitle:
      "create change, innovate, and lead, build a thriving business in a disruptive world. Build skills in product strategy, launching and iterating on products",
  },
  {
    id: 4,
    title: "Marketing",
    subTitle:
      "Learn mobile, front, and back-end development. code with HTML, CSS, JavaScript, React, Django (Python), Ruby on Rails, PHP and more",
  },
  {
    id: 5,
    title: "Startup & Entrepreneurship",
    subTitle:
      "create campaigns, analyze the result, learn content marketing, growth strategy product marketing, conversation optimization and more",
  },
];

interface Props {}
const VacantCourses: React.FC<Props> = () => {
  return (
    <CssSlider>
      <>
        {data.map((dat) => (
          <VacantCourseCard
            key={dat.id}
            title={dat.title}
            subTitle={dat.subTitle}
          />
        ))}
      </>
    </CssSlider>
  );
};

export default VacantCourses;
