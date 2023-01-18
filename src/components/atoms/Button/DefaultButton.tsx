import React from "react";
import { ButtonStyle } from "./style";

interface Props {
  children?: any;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: any;
}
const Button: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <ButtonStyle className={className} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
