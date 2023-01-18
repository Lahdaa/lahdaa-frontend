import React, { useRef, useState } from "react";
import { Button } from "components/atoms/Button";
import Caret from "components/atoms/svgIcons/Caret";
import { Wrapper, DropdownBtn, DropdownList } from "./style";
import useOnClickOutside from "utils/hooks/useOnClickOutside";


interface DropdownProps {
  label?: string;
  name?: string;
  hasBorder?: boolean;
  textType: "bold" | "light";
  placeholder?: string;
  options?: Array<{ name: string; value: string | number }>;
  handleChange?: (name: any, value: any) => void;
}
const DropdownItem: React.FC<DropdownProps> = (props) => {
  // Ref
  const menuRef = useRef<any>();

  // State
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [, setSelectedItem] = useState<string | number>("");
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  // Hooks
  useOnClickOutside(menuRef, () => setShowDropdown(false));

  // props
  const {
    textType,
    hasBorder,
    placeholder,
    options,
    handleChange,
    name,
  } = props;

  // Handlers
  const handleDropdownSelect = (
    data: {
      name: string;
      value: string | number;
    }
  ) => {
    setSelectedItemName(data.name);
    setSelectedItem(data.value);
    setShowDropdown(false);
    handleChange(name, data.value);
  };
  return (
    <Wrapper>
      <DropdownBtn
        onClick={() => setShowDropdown(!showDropdown)}
        textType={textType}
        hasBorder={hasBorder}
        title={selectedItemName}
      >
        <span className="text-truncate max-width-120">
          {selectedItemName || placeholder}
        </span>
        <Caret />
      </DropdownBtn>

      {showDropdown && (
        <>
          {options?.length ? (
            <DropdownList ref={menuRef}>
              {options.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleDropdownSelect(item)}
                  className="dropdown-item"
                >
                  {item.name}
                </Button>
              ))}
            </DropdownList>
          ) : null}
        </>
      )}
    </Wrapper>
  );
};

export default DropdownItem;
