import React from "react";
import { RadioField, Label } from "./style";

interface Props {
  label?: string;
  required?: boolean;
  name: string;
  inputLabel: string;
  className?: string;
}

const Radio: React.FC<Props> = (props) => {
  const { label, required, inputLabel, name } = props;
  return (
    <RadioField {...props}>
      {label && (
        <Label>
          {label} {required && <span className="required">*</span>}
        </Label>
      )}

      <label htmlFor={inputLabel} className="radio-input">
        <input
          type="radio"
          name={name}
          id={inputLabel}
          {...props}
        />

        <span className="check">
          <span className="check__label">{inputLabel}</span>
        </span>
      </label>
    </RadioField>
  );
};

export default Radio;
