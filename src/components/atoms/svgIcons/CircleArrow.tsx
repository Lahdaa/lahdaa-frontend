import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  path1ClassName?: string;
  path2ClassName?: string;
}
const CircleArrow: React.FC<Props> = ({
  width,
  height,
  className,
  path1ClassName,
  path2ClassName,
}) => {
  return (
    <svg
      width={width || "27"}
      height={height || "27"}
      className={className ? className : ""}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={path1ClassName}
        cx="13.5"
        cy="13.5"
        r="13.5"
        fill="#0667EC"
      />
      <path
        className={path2ClassName}
        d="M18.655 12.5832L14.6608 8.58902C14.509 8.43185 14.425 8.22135 14.4269 8.00285C14.4288 7.78435 14.5165 7.57534 14.671 7.42084C14.8255 7.26633 15.0345 7.17869 15.253 7.17679C15.4715 7.17489 15.682 7.25889 15.8392 7.41068L21.2558 12.8274C21.4121 12.9836 21.4998 13.1955 21.4998 13.4165C21.4998 13.6375 21.4121 13.8494 21.2558 14.0057L15.8392 19.4224C15.682 19.5742 15.4715 19.6581 15.253 19.6562C15.0345 19.6543 14.8255 19.5667 14.671 19.4122C14.5165 19.2577 14.4288 19.0487 14.4269 18.8302C14.425 18.6117 14.509 18.4012 14.6608 18.244L18.655 14.2499H7.33333C7.11232 14.2499 6.90036 14.1621 6.74408 14.0058C6.5878 13.8495 6.5 13.6375 6.5 13.4165C6.5 13.1955 6.5878 12.9835 6.74408 12.8273C6.90036 12.671 7.11232 12.5832 7.33333 12.5832H18.655Z"
        fill="white"
      />
    </svg>
  );
};

export default CircleArrow;
