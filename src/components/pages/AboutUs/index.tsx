import React from "react";
import Header from "./Header";
import Main from "./Main";
import { motion } from "framer-motion";
import { animateFade } from "styles/Base/Animation";

const AboutUs = () => (
  <>
    <motion.main
      key="about-us-page"
      variants={animateFade.variants}
      transition={animateFade.transition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header />
      <Main />
    </motion.main>
  </>
);

export default AboutUs;
