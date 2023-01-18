import React, { useEffect, useState } from "react";
import Typography from "components/atoms/Typography";
import SearchInput from "components/organisms/SearchInput";
import DropdownItem from "../DropdownItem";
import { FilterHolder, Wrapper } from "./style";
import { useHelper } from "store/helper";
import { useCourse } from "store/courses";
import { debounceFunc, _getQueryString } from "utils/helper";

interface FilterAndSearchProps {
  className?: string;
}

const FilterAndSearch: React.FC<FilterAndSearchProps> = (props) => {
  // State
  const [queryObj, setQueryObj] = useState({
    course_category: "",
    level_of_competence: "",
    price: "",
    duration: "",
    page_number: 1,
  });
  const [searchStr, setSearchStr] = useState("");

  // Store
  const {
    getCoursesCategory,
    courseCategoriesMapped,
    getLevelOfCompetence,
    levelOfCompetenceMapped,
    getCourseDurations,
    durationsMapped,
  } = useHelper();

  const { getAllCourses } = useCourse();

  // Handlers
  const handleQueryObjChange = (name: any, value: any) => {
    setQueryObj((prevState) => ({ ...prevState, [name]: value }));
  };

  const getCourses = () => {
    const str = _getQueryString({ ...queryObj, search_keyword: searchStr });
    getAllCourses(str);
  };

  const handleSearch = (value: any) => {
    debounceHandler = debounceFunc(
      () => setSearchStr(value),
      debounceHandler,
      1000
    );

    setSearchStr(value);
  };

  const handleSearchAction = async () => {
    await getCourses();
  };

  // const

  // Effect
  useEffect(
    () => {
      getCoursesCategory();
      getLevelOfCompetence();
      getCourseDurations();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      getCourses();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queryObj]
  );

  return (
    <Wrapper {...props}>
      <FilterHolder>
        <Typography as="h5" className="filter-title" text="Search by" />
        <div className="filters">
          <DropdownItem
            textType="light"
            options={[
              ...courseCategoriesMapped,
            ]}
            placeholder="Category"
            handleChange={handleQueryObjChange}
            name="course_category"
          />
          <DropdownItem
            textType="light"
            options={[
              { name: "Select Competency", value: "" },
              ...levelOfCompetenceMapped,
            ]}
            placeholder="Competency"
            handleChange={handleQueryObjChange}
            name="level_of_competence"
          />
          <DropdownItem
            textType="light"
            options={[
              { name: "Select Price", value: "" },
              { name: "Lowest to highest", value: "asc" },
              { name: "Highest to lowest", value: "desc" },
            ]}
            placeholder="Price"
            handleChange={handleQueryObjChange}
            name="price"
          />
          <DropdownItem
            textType="light"
            options={[
              { name: "Select Duration", value: "" },
              ...durationsMapped,
            ]}
            placeholder="Duration"
            handleChange={handleQueryObjChange}
            name="duration"
          />
        </div>
      </FilterHolder>

      <SearchInput getSearchValue={handleSearch} handleSearch={handleSearchAction} />
    </Wrapper>
  );
};

export default FilterAndSearch;
