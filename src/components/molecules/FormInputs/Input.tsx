import React from "react";
import { InputContainer, Label, InputField } from "./style";

interface Props {
  label?: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  name?: string;
}

const Input: React.FC<Props> = (props) => {
  const { label, required, type = "text" } = props;
  return (
    <InputContainer>
      {label && (
        <Label>
          {label} {required && <span className="required">*</span>}
        </Label>
      )}
      <InputField type={type} {...props} />
    </InputContainer>
  );
};

export default Input;
