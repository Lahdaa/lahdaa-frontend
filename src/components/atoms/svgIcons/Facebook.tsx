import * as React from "react";
import { SVGProps } from "react";

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.654 0H6.49C4.067 0 2.492 1.452 2.492 3.7v1.7H.346c-.19 0-.346.141-.346.313v2.466c0 .172.156.312.346.312H2.51v6.228c0 .172.155.312.346.312h2.838c.19 0 .346-.14.346-.312V8.476h2.545c.19 0 .346-.14.346-.313V5.697a.294.294 0 0 0-.104-.218.36.36 0 0 0-.242-.094H6.023V3.949c0-.687.19-1.046 1.177-1.046h1.454c.19 0 .346-.14.346-.312V.312C9 .14 8.844 0 8.654 0Z"
      fill="#fff"
    />
  </svg>
);

export default Facebook;
