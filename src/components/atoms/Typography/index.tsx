import React from "react";

interface Props {
  as: any;
  className?: string;
  text?: string;
  dangerouslySetInnerHTML?: any;
}

const Typography: React.FC<Props> = (props) => {
  // Props
  const { as: As, className, text, children } = props;
  return (
    <As className={className} {...props}>
      {text ? text : children}
    </As>
  );
};

export default Typography;
