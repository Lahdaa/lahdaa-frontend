import React, { useEffect, useState } from "react";
import DropdownItem from "components/molecules/DropdownItem";
import SearchInput from "../SearchInput";
import { Wrapper } from "./style";
import { _getQueryString } from "utils/helper";
import { useInstructor } from "store/instructors";

interface SearchWithDropdownProps {
  className?: string;
  options?: Array<{ name: string; value: string | number }>;
}
const SearchWithDropdown: React.FC<SearchWithDropdownProps> = (props) => {
  // State
  const [queryObj, setQueryObj] = useState({
    course_category: "",
    page_number: 1,
  });
  const [searchStr, setSearchStr] = useState("");

  // Props
  const { options } = props;

  // Store
  const { getInstructorsFilter } = useInstructor();

  // Handler
  const handleQueryObjChange = (name: any, value: any) => {
    setQueryObj((prevState) => ({ ...prevState, [name]: value }));
  };

  const getIntructors = () => {
    const str = _getQueryString({ ...queryObj, search_keyword: searchStr });
    getInstructorsFilter(str);
  };

  const handleSearch = (value: any) => {
    setSearchStr(value);
  };

   const handleSearchAction = async () => {
     await getIntructors();
   };

  // Effects
  useEffect(
    () => {
      getIntructors();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queryObj]
  );

  // Data to display
  return (
    <Wrapper>
      <SearchInput
        getSearchValue={handleSearch}
        placeholder="search for instructors by category"
        handleSearch={handleSearchAction}
        DropdownButton={
          <DropdownItem
            options={options}
            hasBorder={true}
            label="Design"
            textType="light"
            handleChange={handleQueryObjChange}
            name="course_category"
          />
        }
        {...props}
      />
    </Wrapper>
  );
};

export default SearchWithDropdown;
