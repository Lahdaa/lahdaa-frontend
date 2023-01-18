import React from "react";
import { InputContainer, Label, TextareaField } from "./style";

interface Props {
  label?: string;
  required?: boolean;
  pattern?: string;
  cols?: any;
  rows?: any;
  name?: any;
}

const Textarea: React.FC<Props> = (props) => {
  const { label, required } = props;
  return (
    <InputContainer>
      {label && (
        <Label>
          {label} {required && <span className="required">*</span>}
        </Label>
      )}
      <TextareaField {...props} />
    </InputContainer>
  );
};

export default Textarea;
