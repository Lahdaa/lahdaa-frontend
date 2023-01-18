import React from "react";
import { OverlayStyle } from "./Style";

interface Props {
  children?: JSX.Element;
  initial?: any;
  animate?: any;
  variants?: any;
  transition?: any;
  position?: any;
}
const Overlay: React.FC<Props> = (props) => {
  const { children, position } = props;
  return (
    <OverlayStyle
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear" }}
      position={position}
      {...props}
    >
      {children}
    </OverlayStyle>
  );
};

export default Overlay;
