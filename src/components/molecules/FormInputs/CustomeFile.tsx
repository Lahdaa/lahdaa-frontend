import React, { useState } from "react";
import { CustomeFileField, Label } from "./style";

interface Props {
  label?: string;
  required?: boolean;
  pattern?: string;
  accept?: string;
  name?: string;
}

const CustomeFile: React.FC<Props> = (props) => {
  // States
  const [fileName, setFileName] = useState<string>("");

  //   Props
  const { label, required, accept, name } = props;

  //   Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setFileName(target.files[0].name);
  };
  return (
    <CustomeFileField>
      {label && (
        <Label>
          {label} {required && <span className="required">*</span>}
        </Label>
      )}
      <div className="custom-input-container">
        <button className="custom-btn">Add file</button>
        {fileName && <span className="file-name">{fileName}</span>}
      </div>
      <input
        type="file"
        className="file-input"
        required={required}
        onChange={handleChange}
        accept={accept}
        name={name}
      />
      <span className="bottom-label">
        To combat bias in hiring, please take the following items off your
        resume: AGE, BIRTHDAY, MARITAL STATUS, PICTURE.
      </span>
    </CustomeFileField>
  );
};

export default CustomeFile;
