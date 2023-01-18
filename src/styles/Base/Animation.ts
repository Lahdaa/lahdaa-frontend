import { keyframes } from "styled-components";

// Keyframes
export const MoveXAxis = keyframes`
0%{
    transform: translateX(-90%);
}
50%{
    transform: translateX(150%);
}
100%{
    transform: translateX(-90%);
}
`;

export const FadeInDown = keyframes`
0%{
    transform: translateY(.9rem);
    opacity: .7;
    visibility: hidden
}
100%{
    transform: translateY(0);
    opacity: 1;
    visibility: visible
}
`;

export const SlideInDown = keyframes`
0%{
    transform: translateY(1rem);
}
100%{
transform: translateY(0);
}
`;

export const SlideInLeft = keyframes`
0%{
    transform: translateX(-1rem);
}
100%{
transform: translateY(0);
}
`;

export const SlideInRight = keyframes`
0%{
    transform: translateX(1rem);
}
100%{
transform: translateY(0);
}
`;

// Framer animations
export const animateContentLeft = {
  variants: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 1, delay: 0.08 },
};
export const animateContentRight = {
  variants: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 1, delay: 0.08 },
};
export const animateFadeIn = {
  variants: {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 1 },
};
export const animateZoomInFadeIn = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: {
    ease: "easeOut",
    duration: 1,
    // delay: 1.2
  },
};
export const animateSlideUp = {
  variants: {
    hidden: { y: 12, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 0.8 },
};
export const animateSlideDown = {
  variants: {
    hidden: {
      y: -12,

      opacity: 0,
      transition: { duration: 3 },
    },
    visible: { y: 0, opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 0.8 },
};
export const animateSideNav = {
  variants: {
    hidden: {
      x: "100%",
      transition: { delay: 0.4 },
    },
    visible: { x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.4 },
};
export const animateFade = {
  variants: {
    hidden: {
      opacity: 0,
      y: 5,
      transition: { duration: 0.4 },
    },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  },
  transition: { ease: "easeIn", duration: .5 },
};
export const animateDropdownMenu = {
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  },
  transition: { ease: "easeOut", duration: 0.4 },
};
