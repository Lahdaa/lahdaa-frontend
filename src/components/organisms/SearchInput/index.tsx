import React, { useState } from "react";
import { Button } from "components/atoms/Button";
import { Wrapper } from "./style";
import { useCourse } from "store/courses";

interface SearchInputProps {
  DropdownButton?: JSX.Element;
  className?: string;
  placeholder?: string;
  getSearchValue: (val: string) => void;
  handleSearch?: () => void;
}
const SearchInput: React.FC<SearchInputProps> = ({
  DropdownButton,
  placeholder,
  getSearchValue,
  handleSearch,
  ...props
}) => {
  // State
  const [searchValue, setSearchValue] = useState("");

  // Store
  const { isLoadingCoursesSearch } = useCourse();

  // Data to render
  return (
    <Wrapper DropdownButton={DropdownButton ? true : false} {...props}>
      <div className="input-and-dropdown">
        {DropdownButton ? DropdownButton : null}
        <input
          type="text"
          value={searchValue}
          placeholder={placeholder ? placeholder : "search"}
          className="input"
          onChange={(e) => {
            setSearchValue(e.target.value);
            getSearchValue(e.target.value);
          }}
        />
      </div>
      <Button
        disabled={isLoadingCoursesSearch}
        onClick={handleSearch}
        className="btn-black btn-search btn-rounded btn-nav-btn"
      >
        {isLoadingCoursesSearch ? "Searching..." : "Search"}
      </Button>
    </Wrapper>
  );
};

export default SearchInput;
