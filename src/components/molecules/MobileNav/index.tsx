import React from "react";
import Overlay from "components/atoms/Overlay/Index";
import { Wrapper } from "./style";
import { NavLink } from "components/atoms/Link";
import Link from "next/link";
import Logo from "components/atoms/svgIcons/Logo";
import { Button } from "components/atoms/Button";
import { Flex } from "styles/layouts/Flex";

interface MobileNavProps {
  setShowNav?: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ setShowNav }) => {
  return (
    <Overlay>
      <Wrapper
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
      >
        <div className="top">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <div className="mobile-menu" onClick={setShowNav}>
            <span className="first"></span>
            <span className="second"></span>
          </div>
        </div>

        <div className="links">
          <NavLink
            onClick={setShowNav}
            position="left"
            label="Courses"
            path="/courses"
          />
          <NavLink
            onClick={setShowNav}
            position="left"
            label="Instructors"
            path="/instructors"
          />
          <NavLink
            onClick={setShowNav}
            position="left"
            label="About Us"
            path="/about-us"
          />
          <NavLink
            onClick={setShowNav}
            position="left"
            label="FAQ"
            path="/faq"
          />
          <NavLink
            onClick={setShowNav}
            position="left"
            label="Become An Instructor"
            path="/become-an-instructor"
          />
        </div>

        <Flex gap="1rem" className="mt-70" flexRowAiCenter>
          <Button
            onClick={setShowNav}
            className="btn-black btn-md btn-rounded btn-nav-btn display-block"
          >
            Signup
          </Button>
          <Button
            onClick={setShowNav}
            className="btn-white btn-md btn-rounded btn-nav-btn display-block"
          >
            Login
          </Button>
        </Flex>
      </Wrapper>
    </Overlay>
  );
};

export default MobileNav;
