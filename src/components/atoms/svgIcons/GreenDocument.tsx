import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const BlueDocument: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "60"}
      height={height || "61"}
      className={className ? className : ""}
      viewBox="0 0 60 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.1"
        x="0.0689697"
        y="0.790466"
        width="59.2766"
        height="59.2766"
        rx="9.11948"
        fill="#5C4FFF"
      />
      <path
        opacity="0.4"
        d="M36.0771 15.2297H23.3387C18.7182 15.2297 16.028 17.9351 16.028 22.5709V38.2716C16.028 42.9833 18.7182 45.628 23.3387 45.628H36.0771C40.7722 45.628 43.3864 42.9833 43.3864 38.2716V22.5709C43.3864 17.9351 40.7722 15.2297 36.0771 15.2297Z"
        fill="#5C4FFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7484 22.2973V22.3125C23.0933 22.3125 22.5629 22.8445 22.5629 23.498C22.5629 24.1516 23.0933 24.6836 23.7484 24.6836H28.2914C28.9465 24.6836 29.4785 24.1516 29.4785 23.4813C29.4785 22.8293 28.9465 22.2973 28.2914 22.2973H23.7484ZM35.6652 31.5536H23.7491C23.094 31.5536 22.5635 31.0216 22.5635 30.368C22.5635 29.7145 23.094 29.181 23.7491 29.181H35.6652C36.3188 29.181 36.8507 29.7145 36.8507 30.368C36.8507 31.0216 36.3188 31.5536 35.6652 31.5536ZM35.6652 38.4996H23.7491C23.2931 38.5604 22.8523 38.3324 22.6091 37.9524C22.366 37.5572 22.366 37.0557 22.6091 36.6757C22.8523 36.2805 23.2931 36.0677 23.7491 36.1133H35.6652C36.2717 36.1741 36.7291 36.6909 36.7291 37.314C36.7291 37.9205 36.2717 38.4388 35.6652 38.4996Z"
        fill="#5C4FFF"
      />
    </svg>
  );
};

export default BlueDocument;
