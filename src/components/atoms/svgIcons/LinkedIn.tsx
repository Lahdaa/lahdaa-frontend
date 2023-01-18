import * as React from "react";
import { SVGProps } from "react";

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={13.518} cy={13.353} rx={13.081} ry={13.301} fill="#007AB7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.922 11.408H8.974v6.379h1.948v-6.379Zm.159-2.02c0-.634-.507-1.15-1.13-1.15a1.14 1.14 0 0 0-1.13 1.15c0 .634.504 1.15 1.13 1.15.623 0 1.13-.516 1.13-1.15Zm2.93 2.02H12.15v6.379h1.944V14.63c0-.83.152-1.637 1.166-1.637.999 0 1.01.95 1.01 1.692v3.1h1.944v-3.495c0-1.718-.366-3.038-2.335-3.038-.949 0-1.582.528-1.843 1.029h-.025v-.874Z"
      fill="#fff"
    />
  </svg>
);

export default LinkedIn;
