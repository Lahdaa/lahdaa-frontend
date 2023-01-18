import React from "react";
import { InputContainer, Label, SelectField } from "./style";

interface OptionsProps {
  id: string | number;
  value: string | number;
  name: string | number;
}
interface Props {
  label?: string;
  required?: boolean;
  options: object[];
  name?: string;
}

const Select: React.FC<Props> = (props) => {
  const { label, required, options } = props;
  return (
    <InputContainer>
      {label && (
        <Label>
          {label} {required && <span className="required">*</span>}
        </Label>
      )}
      <SelectField {...props}>
        {options.map((option: OptionsProps) => (
          <option value={option.id}>{option.name||option.value}</option>
        ))}
      </SelectField>
    </InputContainer>
  );
};

export default Select;
