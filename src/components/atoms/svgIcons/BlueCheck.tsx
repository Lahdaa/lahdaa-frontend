import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
  pathClassName?: string;
}
const BlueCheck: React.FC<Props> = ({
  width,
  height,
  className,
  pathClassName,
}) => {
  return (
    <svg
      width={width || "35"}
      height={height || "35"}
      className={className ? className : ""}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={pathClassName}
        cx="17.5"
        cy="17.5"
        r="15.3827"
        fill="#0667EC"
        stroke="white"
        strokeWidth="4.23469"
      />
      <path
        d="M10.8608 16.2927L16.2919 21.1203L24.7401 12.0685"
        stroke="white"
        strokeWidth="2.82313"
      />
    </svg>
  );
};

export default BlueCheck;
